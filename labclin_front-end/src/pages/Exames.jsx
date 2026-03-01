import ExamsList from "../components/examsList/examsList";
import ExamsDetails from "../components/examsDetails/examsDetails";
import { useEffect, useState } from "react";
import { listAllExams } from "../service/ExamService";

function Exames({exams,getAllExams,editExam,setEditExam}) {

    return (
        <div className="d-flex gap-5 w-100 p-5">
                <ExamsDetails/>
                <ExamsList exams = {exams} carregarExames = {getAllExams} editExam={editExam} setEditExam={setEditExam}/>
        </div>
    );
}

export default Exames;
