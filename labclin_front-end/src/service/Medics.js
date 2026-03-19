import api from "./api.js"

export function saveMedic(dados){
   return api.post("/medic/save",{
        "name":dados.name,
        "CRM": dados.CRM,
        "especializacao":dados.especializacao
    })
}

export function deleteMedic(id){
   return api.delete(`/medic/delete/${id}`)
}

export function updateMedic(dados,id){
    return api.put(`/medic/update/${id}`,{
        "name": dados.name,
        "CRM": dados.CRM,
        "especializacao":dados.especializacao
    })
}

export function findAllMedic(){
   return api.get("/medic/findAll")
}

export function findByIdMedic(){
    return api.get("/medic/findById")
}
