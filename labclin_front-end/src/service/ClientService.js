import  api from "./api"

export function listAllClients(){
    return api.get("/client/findAll")
}

export function createClient(name,CPF,telephone,email,birthDate,adress){
    return api.post("/client/save", {
        name,
        CPF,
        email,
        telephone,
        birthDate,
        "address":adress
    })
}

export function updateClient(name,CPF,telephone,email,birthDate,adress,id){
    return api.put(`/client/update/${id}`,{
        name,
        CPF,
        telephone,
        email,
        birthDate,
        "address":adress
    })
}

export function deleteCLient(id){
    return api.delete(`/client/delete/${id}`)
}