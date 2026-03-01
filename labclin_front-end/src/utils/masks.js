// Remove tudo que não é número e coloca a formatação de CPF
export const formatarCPF = (cpf) => {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .substring(0, 14);
};

export const formatarTelefone = (telefone) => {
  return telefone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .substring(0, 15);
};

export const noDigits = (value) => {
    if (!value) return null;
    return value.toString().replace(/\D/g, "");
};

export const formatarData = (dateString) => { 
        if (!dateString) return "Sem data";
        
        const [ano, mes, dia] = dateString.split("-");
        return `${dia}/${mes}/${ano}`;
    };