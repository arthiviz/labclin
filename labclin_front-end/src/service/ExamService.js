import api from './api'

export function listAllExams(){
    return api.get("/exam/findAll")
}