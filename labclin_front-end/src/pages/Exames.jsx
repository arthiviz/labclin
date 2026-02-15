import ExamsList from "../components/examsList/examsList";
import ExamsDetails from "../components/examsDetails/examsDetails";

function Exames() {
    return (
        <div className="d-flex gap-5 w-100 p-5">
                <ExamsDetails/>
                <ExamsList />
        </div>
    );
}

export default Exames;
