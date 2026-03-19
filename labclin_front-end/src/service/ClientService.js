import  api from "./api"

export function listAllClients(){
    return api.get("/client/findAll")
}

export function createClient(dados){
    return api.post("/client/save", {
        "name":dados.name,
        "CPF" : dados.CPF,
        "email": dados.email,
        "telephone": dados.telephone,
        "birthDate": dados.birthDate,
        "address":dados.adress,
        "name_mae": dados.name_mae,
        "observations": dados.observations
    })
}

export function updateClient(dados,id){
    return api.put(`/client/update/${id}`,{
        "name":dados.name,
        "CPF" : dados.CPF,
        "email": dados.email,
        "telephone": dados.telephone,
        "birthDate": dados.birthDate,
        "address":dados.adress,
        "name_mae": dados.name_mae,
        "observations": dados.observations
    })
}

export function deleteCLient(id){
    console.log(id)
    return api.delete(`/client/delete/${id}`)
}