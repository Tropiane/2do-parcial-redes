import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import ENV from "./src/config/env.js";
import router from "./src/router.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors(
    {
        origin: "*"
    }
));

app.use("/api", router);
app.listen(ENV.PORT, () => {
    console.log(` Servidor escuchando en el puerto ${ENV.PORT}`);
});