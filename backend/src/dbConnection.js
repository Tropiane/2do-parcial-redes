import { Pool } from "pg";
import ENV from "./config/env.js";

const pool = new Pool({
    user: ENV.PG_USER,
    host: ENV.PG_HOST,
    database: ENV.PG_DATABASE,
    password: ENV.PG_PASSWORD,
    port: ENV.PG_PORT,
});

export default pool;