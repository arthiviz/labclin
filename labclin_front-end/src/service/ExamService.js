import api from './api'

export function listAllExams(){
    return api.get("/exam/findAll")
}

export function saveExam(name,type,preco,description){
    return api.post("/exam/save", {
        name,
        type,
        description,
        preco
    })
}