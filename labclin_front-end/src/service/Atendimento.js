import api from "./api";

export function listAllAtendimentos(){
    return api.get("/coleta/findAll")
}