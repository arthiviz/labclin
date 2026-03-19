import ExamsList from "../components/examsList/examsList";
import ExamsDetails from "../components/examsDetails/examsDetails";
import { useEffect, useState } from "react";
import { listAllExams } from "../service/ExamService";
import { useExams } from "../contexts/ExamContext";

function Exames({editExam,setEditExam}) {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-xl-5">
                    <ExamsDetails/>
                </div>
                
                <div className="col-12 col-xl-7">
                    <ExamsList editExam={editExam} setEditExam={setEditExam}/>
                </div>
                
            </div>
            
                
                
        </div>
    );
}

export default Exames;
