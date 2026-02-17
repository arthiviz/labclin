import ExamsList from "../components/examsList/examsList";
import ExamsDetails from "../components/examsDetails/examsDetails";
import { useEffect, useState } from "react";
import { listAllExams } from "../service/ExamService";

function Exames() {

    const [exams,setExams] = useState([]);

    const getAllExams = async () =>{
        listAllExams()
        .then(response =>{
            setExams(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(()=>{
        getAllExams()
    },[])

    return (
        <div className="d-flex gap-5 w-100 p-5">
                <ExamsDetails/>
                <ExamsList exams = {exams}/>
        </div>
    );
}

export default Exames;
