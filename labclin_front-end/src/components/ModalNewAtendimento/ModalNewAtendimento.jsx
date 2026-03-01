import { useEffect, useRef, useState } from "react";
import { createAtendimento, updateAtendimento } from "../../service/Atendimento";
import Swal from "sweetalert2";
import Atendimentos from "../../pages/Atendimentos";
import { formatarCPF, formatarData } from "../../utils/masks";

function ModalNewAtendimento({clients,exams,getAllAtendimentos,editAtend,setEditAtend}) {

    const date = useRef()
    const observations = useRef()
    const payment_type = useRef()
    const total_pay = useRef()

    const [buscaClient,SetBuscaClient] = useState("")
    const[buscaExam,setBuscaExam] = useState("")

    const [mostrarResultadoExam,setMostrarResultadoExam] = useState(false)
    const [mostrarResultadoClient,setMostrarResultadoClient] = useState(false)

    const [examsSelecionados,setExamsSelecionados] = useState([])
    const [clientSelecionado,setClientSelecionado] = useState(null)

    const clientsFiltrados = clients?.filter(client => client.name.toLowerCase().includes(buscaClient.toLowerCase()))
    const examsFiltrados = exams?.filter(exam => exam.name.toLowerCase().includes(buscaExam.toLocaleLowerCase()))

    const [valorTotal,setValorTotal] = useState(0)

    const adicionarExam = (exam)=>{
        if(!examsSelecionados.find(e => e.id === exam.id)){
            setExamsSelecionados([...examsSelecionados,exam])
        }
        setBuscaExam("")
        setMostrarResultadoExam(false)
    }
    
    const removeExam = (id) =>{
        setExamsSelecionados(examsSelecionados.filter(exam => exam.id !== id))
    }

    const limpar_form = ()=>{

        date.current.value = ""
        observations.current.value = ""
        payment_type.current.value = null
        total_pay.current.value = ""
        setClientSelecionado(null)
        SetBuscaClient("")
        setValorTotal(0)
        setExamsSelecionados([])
        setBuscaExam("")

    }

    const saveService = async ()=>{
        const dados = {
            client : clientSelecionado,
            exams: examsSelecionados,
            date: date.current.value,
            observations: observations.current.value,
            total: valorTotal,
            payment_type: payment_type.current.value,
            total_pay: total_pay.current.value,
        }

        try{
            if(editAtend){
                const response = await updateAtendimento(dados,editAtend)
                console.log(response)
                Swal.fire("Editado!", "Coleta Editada com Sucesso.", "success");
                limpar_form()
                getAllAtendimentos()
            }else{
                console.log(dados.payment_type)
                const response = await createAtendimento(dados)
                console.log(response)
                Swal.fire("Adicionado!", "Coleta Adicionada com Sucesso.", "success");
                limpar_form()
                getAllAtendimentos()
            }

            
            

        }catch(erro){
            console.log(erro)
            const mensagemServidor = erro.response && erro.response.data 
                ? erro.response.data 
                : "Erro desconhecido ao salvar";
            
            Swal.fire("Erro!", mensagemServidor, "error");
        }
    }

    useEffect(()=>{
        const somaExams = examsSelecionados.reduce((acc, exam) => acc + exam.preco, 0)

        setValorTotal(somaExams)
    },[examsSelecionados])


    useEffect(() => {
        if(editAtend){
            SetBuscaClient(editAtend.client.name)
            setClientSelecionado(editAtend.client)
            setExamsSelecionados(editAtend.exams)
            payment_type.current.value = editAtend.payment_type
            total_pay.current.value = editAtend.total_pay
            setValorTotal(editAtend.total)
            date.current.value = editAtend.date.substring(0, 10);
        }else{
            limpar_form()
        }

        
    }, [editAtend]);

    useEffect(() => {
        const modalElement = document.getElementById("modalNewAtendimento")

        const handleClose = () => {
            limpar_form()
            setEditAtend(null)
        }

        modalElement.addEventListener("hidden.bs.modal", handleClose)

        return () => {
            modalElement.removeEventListener("hidden.bs.modal", handleClose)
        }
    }, [])


  return (
    
    <div className="modal fade" id="modalNewAtendimento" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header bg-light">
                    <h5 className="modal-title text-danger">Novo Atendimento</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                    <div className="p-3">
                    <div className="row mb-3">
                        <div className="col-md-6 position-relative">
                            <label className="form-label fw-bold">Cliente*</label>
                            <input type="text" 
                            placeholder="Nome do Paciente" 
                            value={buscaClient} 
                            className="form-control border-secondary-subtle bg-light"
                            onChange={(valor) =>{
                                SetBuscaClient(valor.target.value)
                                setMostrarResultadoClient(true)
                            }}
                            onFocus={() => setMostrarResultadoClient(true)}/>

                            {mostrarResultadoClient && buscaClient.length > 0 && (
                                <ul className="list-group position-absolute w-100 shadow-sm" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                                    {clientsFiltrados?.length > 0 ? (
                                        clientsFiltrados.map((client,index)=>(
                                            <li key={client.id || index} className="list-group-item list-group-item-action" style={{cursor:"pointer"}} onClick={()=>{
                                                SetBuscaClient(client.name)
                                                setClientSelecionado(client)
                                                setMostrarResultadoClient(false)
                                            }}>
                                                {client.name} <br />
                                                <small className="">{client.CPF ? formatarCPF(client.CPF) :formatarData(client.birthDate)}</small>
                                            </li>
                                        ))
                                    ) :(
                                        <li className="list-group-item list-group-item-action">Nenhum Paciente encontrado</li>
                                    )}
                                </ul>
                            )}
                        </div>
                        <div className="col-md-6 position-relative">
                            <label className="form-label fw-bold">Exames*</label>
                            <input type="text"
                                placeholder="Adicionar Novo Exame"
                                value={buscaExam}
                                className="form-control border-secondary-subtle bg-light"
                                onChange={(valor) =>{
                                    setBuscaExam(valor.target.value)
                                    setMostrarResultadoExam(true)
                                }}
                                onFocus={()=> setMostrarResultadoExam(true)}
                            />

                            {mostrarResultadoExam && buscaExam.length > 0 && (
                                <ul className="list-group position-absolute w-100 shadow-sm" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                                    {examsFiltrados?.length > 0 ?(
                                        examsFiltrados.map((exam,index) =>(
                                            <li key={exam.id || index} className="list-group-item list-group-item-action" style={{cursor:"pointer"}} onClick={()=>{
                                                adicionarExam(exam)
                                            }}>
                                                {exam.name}
                                            </li>
                                        ))
                                    ) : <li className="list-group-item list-group-item-action">Nenhum exame encontrado</li>}
                                </ul>
                            )}
                            
                        </div>
                    </div>
                    {examsSelecionados.length > 0 && (
                        <div className="row mb-3">
                            <div className="col-md-12">
                                
                                    <ul className="p-0 m-1 list-group overflow-auto" style={{maxHeight: 100}}>
                                        {examsSelecionados.map((exam,index)=>(
                                            <li key={exam.id || index} className="d-flex justify-content-between border-bottom">
                                                {exam.name}
                                                <button onClick={()=>{removeExam(exam.id)}} className="btn border border-0 text-danger">---</button>
                                            </li>
                                        ))}
                                    </ul>
                                
                            </div>
                        </div>
                    )}

                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Data da Coleta*</label>
                            <input type="date" ref={date} className="form-control border-secondary-subtle bg-light" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Tipo de Pagamento*</label>
                            <select name="tipoPagamento" ref={payment_type} id="tipoPagamento" className="form-select border-secondary-subtle bg-light">
                                <option value="null">Selecione o tipo de pagamento</option>
                                <option value="dinheiro">Dinheiro</option>
                                <option value="pix">PIX</option>
                                <option value="debito">Débito</option>
                                <option value="cartao-1x">Crédito á vista</option>
                                <option value="cartao-2x">Crédito 2x</option>
                                <option value="cartao-3x">Crédito 3x</option>
                                <option value="cartao-4x">Crédito 4x</option>
                                <option value="cartao-5x">Crédito 5x</option>
                                <option value="cartao-6x">Crédito 6x</option>
                            </select>
                        </div>
                    </div>

                    
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Total*</label>
                            <input type="text" value={valorTotal} onChange={(valor) => setValorTotal(Number(valor.target.value))} className="form-control border-secondary-subtle bg-light" placeholder="Valor Total" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Total Pago*</label>
                            <input type="text" ref={total_pay} className="form-control border-secondary-subtle bg-light" placeholder="Valor Pago"/>
                        </div>
                        <div>
                            <label className="form-label fw-bold">Observações</label>
                            <textarea ref={observations} className="form-control border-secondary-subtle bg-light" placeholder="Observações adicionais"></textarea>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button onClick={()=>saveService()} className="btn btn-danger px-4 fw-bold text-center">
                            {editAtend ? "Editar Coleta" : "Nova Coleta" }
                        </button>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        </div>

  );
}
export default ModalNewAtendimento;