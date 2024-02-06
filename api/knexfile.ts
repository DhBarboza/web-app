import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "pg",
        connection: {
            host: "localhost", // Altere para o endereço IP do seu banco de dados PostgreSQL
            port: 5432, // Porta padrão do PostgreSQL
            database: "project",
            user: "postgres",
            password: "Admin1234",
        },
        migrations: {
            directory: "./migrations",
        },
    },
    production: {
        client: "pg",
        connection: {
            host: "localhost", // Altere para o endereço IP do seu banco de dados PostgreSQL
            port: 5432, // Porta padrão do PostgreSQL
            database: "project",
            user: "postgres",
            password: "Admin1234",
        },
        migrations: {
            directory: "./migrations",
        },
    },
};

export default config;
