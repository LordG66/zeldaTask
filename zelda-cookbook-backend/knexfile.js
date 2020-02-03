// Update with your config settings.
require('dotenv').config();
var db = 'postgres://postgres:postgres@db:5432/zelda_cookbook';
var dbclient = 'postgresql';
module.exports = {
  development: {
    client: dbclient,//'postgresql',
    connection: db,//'postgres://postgres:postgres@db:5432/zelda_cookbook',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: dbclient,//'postgresql',
    connection: db,//'postgres://postgres:postgres@db:5432/zelda_cookbook',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
