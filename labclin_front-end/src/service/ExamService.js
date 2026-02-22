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

export function updateExam(name,type,preco,description,id){
    return api.put(`/exam/update/${id}`,{
        name,
        type,
        preco,
        description
    })
}

export function deleteExam(id){
    return api.delete(`/exam/delete/${id}`)
}