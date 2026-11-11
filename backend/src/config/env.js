const ENV ={
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
    PG_USER: process.env.PG_USER || 'admin',
    PG_PASSWORD: process.env.PG_PASSWORD || 'Admin1234',
    PG_HOST: process.env.PG_HOST || 'localhost',
    PG_PORT: process.env.PG_PORT || 5433,
    PG_DATABASE: process.env.PG_DATABASE || 'redes-db'
}

export default ENV