let config = {
    BASE_V1_PATH: "/api/v1",
    PORT: process.env.PORT,
    ENV: process.env.ENV,
    PG_USERNAME: process.env.PG_USERNAME,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_HOST: process.env.PG_HOST,
    PG_PORT: process.env.PG_PORT,
    PG_DB: process.env.PG_DB
};

module.exports = config;