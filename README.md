# 🏥 Labclin - Sistema de Gestão de Laboratório de Análises

> Solução Full Stack moderna e performática para gestão de pacientes, exames e fluxos financeiros.

O **Labclin** é um ecossistema completo composto por uma API REST robusta em Java e uma SPA (Single Page Application) reativa em React. O foco do projeto é garantir integridade de dados e uma experiência de usuário fluida.Com foco no gerenciamento financeiro e de clientes organizado da empresa.Atualmente o projeto segue em desenvolvimento.

---

## 📸 Demonstração

| Página de Login|
| :---: |
 <img alt="Login" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/login.png" width="50%">

| Pagina Inicial | Página de Exames
| :---: | :---: |
<img alt="home page" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/home.png">|<img alt="exames page" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/exames.png">

 | Página de Paciente 1/2 | Página de Pacientes 2/2
| :---: | :---: |
 <img alt="Pacientes 1" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/pacientes1.png">|<img alt="Pacientes 2" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/pacientes2.png">

  | Página de Médicos | Página de atend.
| :---: | :---: |
 <img alt="page medico" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/pacientes1.png">|<img alt="page atendimento" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/atendimentos.png">

| Modal de Atend. | Modal de Exame |
| :---: | :---: |
 <img alt="Modal Atendimento" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/novoAtendimento.png">|<img alt="Modal de Exame" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/novoExame.png">

  | Modal de Médico | Modal de CLiente
| :---: | :---: |
 <img alt="Modal de Medico" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/novoMedico.png">|<img alt="Modal de cliente" src="https://raw.githubusercontent.com/arthiviz/labclin/master/labclin_front-end/src/assets/prints/novoCliente.png">
  

---

## ✨ Funcionalidades Principais

### 💻 Front-end (React)

Desenvolvido como uma **SPA (Single Page Application)** de alta performance, focada em uma navegação fluida e interface intuitiva.

* **Navegação Inteligente:** NavBar reativa que identifica a rota atual com feedback visual, utilizando `useLocation` e `NavLink` para evitar recarregamentos de página.
* **Gerenciamento de Estado:** Uso de `Context API` para persistência de dados global, implementando uma estratégia de **cache em memória** que evita requisições redundantes ao back-end.
* **Interface Responsiva:** Layout adaptável para dispositivos móveis e desktop, utilizando Bootstrap 5 aliado a animações em CSS puro para maior leveza.
* **Consumo de API:** Integração assíncrona com o back-end utilizando **Axios**, garantindo um fluxo de dados rápido e tratamento de estados de *loading*.

### ⚙️ Back-end (Spring Boot)
- **CRUD Completo e Seguro:** Operações de criação, leitura (com ordenação decrescente por ID), atualização e deleção com integridade referencial.
- **Status Financeiro Automatizado:** Lógica de negócio inteligente que define o status do cliente (OK/PENDENTE) comparando automaticamente o valor total das coletas vs. valor pago.
- **Segurança Avançada:** Autenticação via JWT (JSON Web Token) e proteção de rotas.
- **Arquitetura Limpa:** Separação clara entre Controllers, Services, Repositories e Entities.
- **Gestão de Configurações:** Uso rigoroso de Variáveis de Ambiente para segurança em deploy (12-Factor App).

---

## 🚀 Tecnologias Utilizadas

### Front-end
* [React.js](https://reactjs.org/) - UI Library
* [React Router Dom v6](https://reactrouter.com/) - Roteamento
* [Context API](https://reactjs.org/docs/context.html) - State Management
* [Axios](https://axios-http.com/) - Cliente HTTP
* [BootsTrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - FrameWork CSS

### Back-end
* [Java 21](https://www.oracle.com/java/) & [Spring Boot 4](https://spring.io/projects/spring-boot)
* [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Persistência de Dados
* [PostgreSQL](https://www.postgresql.org/) - Banco de Dados Relacional
* [Hibernate](https://hibernate.org/) - Mapeamento Objeto-Relacional (ORM)
* [Spring Security](https://spring.io/projects/spring-security) - Autenticação e Autorização


