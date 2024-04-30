import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "../prisma/generated/index";

const startServer = async () => {
  const app = express();
  const prisma = new PrismaClient();

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
};

startServer();
