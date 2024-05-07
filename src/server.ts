import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express, { Request, Response, NextFunction } from 'express';
import { buildSchema } from 'type-graphql';
import { PrismaClient, Prisma } from '@prisma/client';
import { resolvers } from '../prisma/generated/';
import cors, { CorsOptions } from 'cors';  // Ensure cors is imported correctly

const prisma = new PrismaClient();

// Enhanced CORS middleware for debugging
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    console.log("Received request from origin:", origin);
    callback(null, true); // Allow all origins
  },
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Middleware to handle Prisma errors
prisma.$use(async (params, next) => {
  try {
    return await next(params);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const errorMessage = getErrorMessage(error);
      throw new Error(errorMessage);
    } else {
      console.error('Unhandled error: ', error);
      throw new Error('An unknown error occurred. Please contact support.');
    }
  }
});

// Map Prisma errors to user-friendly messages
function getErrorMessage(error: Prisma.PrismaClientKnownRequestError): string {
  switch (error.code) {
    case 'P2000':
      throw new Error(`Значение для поля ${error.meta?.target} слишком большое или имеет неправильный формат.`);
    case 'P2002':
      throw new Error(`Запись с таким значением уже существует. Пожалуйста, используйте другое значение.`);
    case 'P2003':
      throw new Error(`Невозможно добавить или обновить запись, так как связанный объект не найден.`);
    case 'P2004':
      throw new Error(`Поле не может быть пустым. Пожалуйста, убедитесь, что это поле заполнено.`);
    case 'P2005':
      throw new Error(`Предоставлено некорректное значение для поля. Пожалуйста, проверьте формат и тип данных.`);
    case 'P2007':
      throw new Error(`Значение в поле должно быть уникальным.`);
    case 'P2011':
      throw new Error(`Поле является обязательным и не может быть пустым.`);
    case 'P2012':
      throw new Error(`Размер списка для поля превышает допустимый лимит.`);
    case 'P2013':
      throw new Error(`Ошибка при создании связи между записями.`);
    case 'P2014':
      throw new Error(`Нельзя удалить запись, поскольку она используется в других связях.`);
    case 'P2015':
      throw new Error(`Обновление не выполнено, так как не найдено записей соответствующих критериям.`);
    case 'P2025':
      throw new Error(`Не найдено записей соответствующих заданным критериям. Операция не может быть выполнена.`);
    default:
      throw new Error('Произошла внутренняя ошибка сервера.');
  }
}

// Middleware to validate API key
function validateAPIKey(req: Request, res: Response, next: NextFunction): void {
  const apiKey = req.headers['api-key'] as string;
  if ((apiKey === process.env.API_KEY) || process.env.PRODUCTION_MODE === "false") {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

async function main() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const app = express();
  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  await server.start();

  app.use(cors(corsOptions)); // Apply enhanced CORS middleware for debugging
  app.use(validateAPIKey); // API key validation before handling requests

  server.applyMiddleware({ app });

  app.listen({ port: 3006 }, () => {
    console.log(`Server is running at http://127.0.0.1:3006/graphql`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
