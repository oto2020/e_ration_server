import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '../prisma/generated/index';

const prisma = new PrismaClient();

async function main() {
  const schema = await buildSchema({
    resolvers: resolvers,
    validate: false,
  });

  const server = new ApolloServer({ 
    schema,
    context: () => ({ prisma }), // Передаем Prisma Client в контекст
  });

  server.listen({ port: 3006 }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
