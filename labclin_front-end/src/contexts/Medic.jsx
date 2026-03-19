import { createContext, useState, useContext, useCallback } from "react";
import { listAllClients } from "../service/ClientService";
import { findAllMedic } from "../service/Medics";

// 1. CRIAR O CONTEXTO
// É como se estivéssemos criando o "canal de rádio" por onde os dados vão passar.
const MedicContext = createContext();

// 2. CRIAR O PROVEDOR (PROVIDER)
// Este é o componente que vai "embrulhar" o seu App e guardar os dados na memória.
export const MedicProvider = ({ children }) => {
  
  // ESTADO: Aqui é onde os pacientes ficam salvos na memória RAM do navegador.
  // Enquanto o usuário não der F5, o que estiver aqui dentro persiste entre as trocas de abas.
  const [medics, setMedics] = useState([]);
  const [loadingMedics, setLoadingMedics] = useState(false);

  // FUNÇÃO DE BUSCA: Lógica para carregar os dados do Back-end.
  // Usamos useCallback para que a função não seja recriada toda vez que o componente renderizar.
  const carregarMedicos = useCallback(async (force = false) => {
    
    // TRAVA DE SEGURANÇA: 
    // Se a lista já tiver dados E o usuário não estiver "forçando" um refresh,
    // nós damos um 'return' para cancelar a requisição ao Back-end.
    if (medics.length > 0 && !force) {
      console.log("Dados carregados da memória (Cache)");
      return;
    }

    try {
      setLoadingMedics(true);
      console.log("Buscando dados no servidor...");
      const response = await (findAllMedic());
      
      // SALVANDO NA NUVEM: Os dados que vieram do banco agora moram no estado global.
      setMedics(response.data);
    } catch (error) {
      console.error("Erro ao carregar clientes no Contexto:", error);
    } finally {
      setLoadingMedics(false);
    }
  }, [medics]); // A função só se renova se a lista de clientes mudar

  // 3. RETORNO DO COMPONENTE
  // No 'value', colocamos TUDO o que as outras páginas (Home, Pacientes, Atendimentos)
  // vão precisar acessar. Pode ser variáveis, estados ou funções.
  return (
    <MedicContext.Provider value={{ 
      medics, 
      setMedics, // Útil para atualizar a lista manualmente após um cadastro
      loadingMedics, 
      carregarMedicos 
    }}>
      {children} 
    </MedicContext.Provider>
  );
};

// 4. HOOK PERSONALIZADO
// Isso aqui é apenas um "atalho" para você não precisar importar 'useContext' e 'PacienteContext'
// em toda página. Você usará apenas 'const { clients } = usePacientes();'
export const useMedics = () => {
  const context = useContext(MedicContext);
  if (!context) {
    throw new Error("useMedics deve ser usado dentro de um MedicProvider");
  }
  return context;
};