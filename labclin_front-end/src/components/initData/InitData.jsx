import { useEffect } from "react";
import { useMedics } from "../../contexts/Medic";
import { useClients } from "../../contexts/ClientContext";
import { useAtendimento } from "../../contexts/AtendimentoContext";
import { useExams } from "../../contexts/ExamContext";
// importe os outros também

export default function InitData() {
  const {carregarAtendimentos} = useAtendimento();  
  const { carregarExames } = useExams();
  const {carregarMedicos} = useMedics();
  const {carregarUsuarios} = useClients();

  useEffect(() => {
    carregarUsuarios();
    carregarExames();
    carregarMedicos();
    carregarAtendimentos();
  }, []);

  return null; // não renderiza nada
}