import pool from "./dbConnection.js";

export default class DAO {

    
    async getData(){
        try {
            const response = await pool.query('SELECT * FROM productos');
            return response.rows;
        } catch (error) {
            console.log(`DAO: Error al obtener los datos: ${error}`);
        }
    }

}