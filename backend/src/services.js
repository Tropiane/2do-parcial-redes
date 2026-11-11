import DAO from "./dao.js";

export default class Services{
    constructor(){
        this.dao = new DAO();
    }

    async getData(){
        try {
            const response = await this.dao.getData();
            if(!response){
                return [];
            }
            return response;
        } catch (error) {
            console.log(`Services: Error al obtener los datos: ${error}`);
        }
    }
}