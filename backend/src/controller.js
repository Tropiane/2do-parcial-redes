import Services from "./services.js";

export default class Controller {
    
    async getData(req, res) {
        try {
            const service = new Services();
            const response = await service.getData();
            res.status(200).json(response);
            return response;
        } catch (error) {
            console.log(`Controller: Error al obtener los datos: ${error}`);
            res.status(500).json({ error: "Error al obtener los datos" });
        }
    }
}