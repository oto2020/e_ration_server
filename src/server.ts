import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express, { Request, Response, NextFunction } from 'express'; // Импорт типов для Request и Response
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '../prisma/generated/';
import cors from 'cors'; // Импорт модуля для CORS

const prisma = new PrismaClient();

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
