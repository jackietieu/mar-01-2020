"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Item",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-liedog-544/mar-01-2020/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Item",
    embedded: false
  }
];
