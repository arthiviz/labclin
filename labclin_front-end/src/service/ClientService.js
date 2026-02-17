import  api from "./api"

export function listAllClients(){
    return api.get("/client/findAll")
}

export function createClient(name,CPF,telephone,email,birthDate,adress){
    console.log(name,CPF,telephone,email,birthDate,adress)
    return api.post("/client/save", {
        name,
        CPF,
        email,
        telephone,
        birthDate,
        adress
    })
}