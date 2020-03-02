This app is bootstrapped by [`graphql-boilerplates /react-fullstack-graphql`](https://github.com/graphql-boilerplates/react-fullstack-graphql/tree/master/basic)

## Features

- **Scalable GraphQL server:** The server uses [`graphql-yoga`](https://github.com/prisma/graphql-yoga) which is based on Apollo Server & Express
- **Pre-configured Apollo Client:** The project comes with a preconfigured setup for Apollo Client
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prismagraphql.com) (running on MySQL)
- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)
- **Extensible**: Simple and flexible [data model](./database/datamodel.graphql) – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`graphql-config`](https://github.com/prisma/graphql-config) setup

## Getting started

Clone this repo then:

```sh
# 1. Navigate into the `server` directory of the project
cd mar-01-2020/server

# 2. Start the server
yarn start # runs server on http://localhost:4000, and opens GraphQL PLayground

# 3. Open a new tab in the terminal and navigate back into my-app;
# then run the app
cd ..
yarn start
```
