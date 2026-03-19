import { createContext, useState, useContext, useCallback } from "react";
import { listAllClients } from "../service/ClientService";
import { listAllExams } from "../service/ExamService";

// 1. CRIAR O CONTEXTO
// É como se estivéssemos criando o "canal de rádio" por onde os dados vão passar.
const ExamContext = createContext();

// 2. CRIAR O PROVEDOR (PROVIDER)
// Este é o componente que vai "embrulhar" o seu App e guardar os dados na memória.
export const ExamProvider = ({ children }) => {
  
  // ESTADO: Aqui é onde os pacientes ficam salvos na memória RAM do navegador.
  // Enquanto o usuário não der F5, o que estiver aqui dentro persiste entre as trocas de abas.
  const [exams, setExams] = useState([]);
  const [loadingExams, setLoadingExams] = useState(false);

  // FUNÇÃO DE BUSCA: Lógica para carregar os dados do Back-end.
  // Usamos useCallback para que a função não seja recriada toda vez que o componente renderizar.
  const carregarExames = useCallback(async (force = false) => {
    
    // TRAVA DE SEGURANÇA: 
    // Se a lista já tiver dados E o usuário não estiver "forçando" um refresh,
    // nós damos um 'return' para cancelar a requisição ao Back-end.
    if (exams.length > 0 && !force) {
      console.log("Dados carregados da memória (Cache)");
      return;
    }

    try {
      setLoadingExams(true);
      console.log("Buscando dados no servidor...");
      const response = await (listAllExams());
      
      // SALVANDO NA NUVEM: Os dados que vieram do banco agora moram no estado global.
      setExams(response.data);
    } catch (error) {
      console.error("Erro ao carregar clientes no Contexto:", error);
    } finally {
      setLoadingExams(false);
    }
  }, [exams]); // A função só se renova se a lista de clientes mudar

  // 3. RETORNO DO COMPONENTE
  // No 'value', colocamos TUDO o que as outras páginas (Home, Pacientes, Atendimentos)
  // vão precisar acessar. Pode ser variáveis, estados ou funções.
  return (
    <ExamContext.Provider value={{ 
      exams, 
      setExams, // Útil para atualizar a lista manualmente após um cadastro
      loadingExams, 
      carregarExames 
    }}>
      {children} 
    </ExamContext.Provider>
  );
};

// 4. HOOK PERSONALIZADO
// Isso aqui é apenas um "atalho" para você não precisar importar 'useContext' e 'PacienteContext'
// em toda página. Você usará apenas 'const { clients } = usePacientes();'
export const useExams = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExams deve ser usado dentro de um ExamProvider");
  }
  return context;
};