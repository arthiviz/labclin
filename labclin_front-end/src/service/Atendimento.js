import api from "./api";

export function listAllAtendimentos(){
    return api.get("/coleta/findAll")
}

export function createAtendimento(dados){
    return api.post("/coleta/save",{
        "client":dados.client,
        "exams": dados.exams,
        "date": dados.date,
        "ob": dados.date,
        "observations": dados.observation,
        "total": dados.total,
        "payment_type": dados.payment_type,
        "total_pay": dados.total_pay,
    })
}

export function deleteAtendimento(id){
    return api.delete(`/coleta/delete/${id}`)
}

export function updateAtendimento(dados,id){
    return api.put(`/coleta/update/${id}`,{
        "client":dados.client,
        "exams": dados.exams,
        "date": dados.date,
        "ob": dados.date,
        "observations": dados.observation,
        "total": dados.total,
        "paymennt_type": dados.payment_type,
        "total_pay": dados.total_pay,
    })
}