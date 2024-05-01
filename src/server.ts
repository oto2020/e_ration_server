import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '../prisma/generated/index';
import cors from 'cors'; // Импорт модуля для CORS

const prisma = new PrismaClient();

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

  server.applyMiddleware({ app });

  app.use(cors()); // Применяем CORS middleware

  app.listen({ port: 3006 }, () => {
    console.log(`Server is running at http://127.0.0.1:3006/graphql`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
