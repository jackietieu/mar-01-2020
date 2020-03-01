const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    items: (parent, args, context) => {
      return context.prisma.items();
    }
    // Items: (parent, args, context) => {
    //   return context.prisma.posts({ where: { published: false } })
    // },
    // post: (parent, { id }, context) => {
    //   return context.prisma.post({ id })
    // },
  },
  Mutation: {
    createItem(parent, { content }, context) {
      return context.prisma.createItem({
        content
      });
    },
    deleteItem(parent, { id }, context) {
      return context.prisma.deleteItem({ id });
    }
    // publish(parent, { id }, context) {
    //   return context.prisma.updatePost({
    //     where: { id },
    //     data: { published: true },
    //   })
    // },
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
