import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express, { Request, Response, NextFunction } from 'express'; // Импорт типов для Request и Response
import { buildSchema } from 'type-graphql';
import { PrismaClient, Prisma } from '@prisma/client';
import { resolvers } from '../prisma/generated/';
import cors from 'cors'; // Импорт модуля для CORS

const prisma = new PrismaClient();


prisma.$use(async (params, next) => {
    try {
      const result = await next(params);
      return result;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
      } else {
        // Логирование неизвестных исключений для дальнейшего анализа
        console.error('Необработанная ошибка: ', error);
        throw new Error('Произошла неизвестная ошибка. Пожалуйста, свяжитесь с поддержкой.');
      }
    }
  });


// Создаем тип для API ключа
type APIKey = string;

if (process.env.PRODUCTION_MODE === "false") {
  console.log(`ВНИМАНИЕ! Проверка содержимого 'api-key' в заголовке запроса ОТКЛЮЧЕНА!\n` + 
  `Для включения проверки задайте .env.PRODUCTION_MODE="true" на стороне сервера.\n`);
}
else {
  console.log(`Не забудьте включать 'api-key' ${process.env.API_KEY} в заголовок запроса.\n` +
  `Для отключения проверки задайте .env.PRODUCTION_MODE="false" на стороне сервера.\n`);
}

// Функция для проверки API ключа
function validateAPIKey(req: Request, res: Response, next: NextFunction) {
    const apiKey: APIKey | undefined = req.headers['api-key'] as APIKey | undefined;

    if ((apiKey && apiKey === process.env.API_KEY) || process.env.PRODUCTION_MODE === "false") {
        next(); // Продолжаем выполнение запроса
    } else {
        res.status(401).send('Unauthorized'); // Возвращаем ошибку "Unauthorized"
    }
}

async function main() {
    const schema = await buildSchema({
        resolvers: resolvers,
        validate: false,
    });

    const app = express();

    const server = new ApolloServer({
        schema,
        context: () => ({ prisma }),
    });

    await server.start(); // Запускаем сервер Apollo

    app.use(cors()); // Применяем CORS middleware
    app.use(validateAPIKey); // Проверяем API ключ перед обработкой запросов

    app.listen({ port: 3006 }, () => {
        console.log(`Server is running at http://127.0.0.1:3006/graphql`);
    });

    server.applyMiddleware({ app });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
