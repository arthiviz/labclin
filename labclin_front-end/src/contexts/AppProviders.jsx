import { AtendimentoProvider } from "./AtendimentoContext.jsx";
import { ClientProvider } from "./ClientContext.jsx";
import { ExamProvider } from "./ExamContext.jsx";
import { MedicProvider } from "./Medic.jsx";

// Esse componente centraliza todos os provedores
export const AppProviders = ({ children }) => {
  console.log("🔥 AppProviders renderizou");
  return (
    <AtendimentoProvider>
        <MedicProvider>
            <ClientProvider>
                <ExamProvider>
                   {children} 
                </ExamProvider>
            </ClientProvider>
        </MedicProvider>
    </AtendimentoProvider>
  );
};