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
        "paymennt_type": dados.payment_type,
        "total_pay": dados.total_pay,
        "status": dados.status
    })
}