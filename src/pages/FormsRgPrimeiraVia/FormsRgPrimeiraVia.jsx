import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import InputMask from 'react-input-mask';

import './FormsRgPrimeiraVia.styles.css';

import exclamaLana from '../../assets/Headline.png';

import Menu from '../../components/Menu/Menu';
import CamposObrigatorios from '../../components/CamposObrigatorios/CamposObrigatorios';

export default function FormsRgPrimeiraVia() {
    const [estado, setEstado] = useState('São Paulo');
    const [cidade, setCidade] = useState('Adamantina');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [estadoEmissor, setEstadoEmissor] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [sexo, setSexo] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [municipios, setMunicipios] = useState([]);
    const [estados, setEstados] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');
    const [mensagemAviso, setMensagemAviso] = useState('');

    const history = useHistory();
  
    useEffect(() => {
        const fetchMunicipios = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios');
            const data = await response.json();
            console.log(data);
            return setMunicipios(data);
        } catch (error) {
            console.error(error);
        }
        };

        const fetchEstados = async () => {
            try {
              const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
              const data = await response.json();
              const siglas = data.map((estado) => estado.sigla);
              setEstados(siglas);
            } catch (error) {
              console.log(error);
            }
          };

        fetchEstados();
        fetchMunicipios();
    }, []);

    const handleCpfChange = (event) => {
        const formattedCpf = event.target.value.replace(/\D/g, '');
        setCpf(formattedCpf);
      };

      const isFormValid = () => {
        return (
          estado &&
          cidade &&
          cpf &&
          rg &&
        //   estadoEmissor &&
          nomeCompleto &&
          sexo &&
          nascimento
        );
      };

      const handleSexoChange = (event) => {
        setSexo(event.target.value);
      };
      
      const handleRgChange = (event) => {
        const formattedRg = event.target.value.replace(/\D/g, '');
        setRg(formattedRg);
      };
      
      const handleDataNascimentoChange = (event) => {
        setNascimento(event.target.value);
      };
  
    // Função para lidar com o envio do formulário
    const handleEstadoChange = (event) => {
        setSelectedEstado(event.target.value);
      };

    function validarFormulario(event) {
        event.preventDefault(); // Evita que a página seja recarregada ao submeter o formulário
      
        if (
          estado.trim() === '' ||
          cidade.trim() === '' ||
          cpf.trim() === '' ||
          rg.trim() === '' ||
        //   estadoEmissor.trim() === '' ||
          nomeCompleto.trim() === ''
        ) {
          setMensagemAviso('Todos os campos devem ser preenchidos corretamente.');
        } else {
          // Todos os campos estão preenchidos corretamente, você pode prosseguir com a lógica desejada
          const data = [
                {
                    estado,
                    cidade,
                    cpf,
                    rg,
                    estadoEmissor,
                    nomeCompleto,
                    nomeSocial,
                    sexo,
                    nascimento,
                }
            ];
          setMensagemAviso('');
          localStorage.setItem('data', JSON.stringify(data));
          history.push('/formularioContact');
        }
      }
  
    return (
        <div className="containerFormsContact">
            <aside className="containerMenuHeader">
                <Menu />
            </aside>
            <div className="containerTitleForms">
                <h1>
                    RG - Carteira de Identidade
                </h1>
                <h5>
                    pedido de documento
                </h5>
            </div>
            <form className="forms-container" onSubmit={validarFormulario}>
                <div className="containerStateMunici">
                    <h3>
                        Local do Agendamento:
                    </h3>
                    <CamposObrigatorios />
                    <label>
                    *Estado:
                    <select
                        className="form-select inputState"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)
                        }
                    >
                        <option value="São Paulo">São Paulo</option>
                    </select>
                    <p><span>*</span> No momento estamos fornecendo atendimento somente no estado de São Paulo.</p>
                    </label>
                    <label>
                    * Cidade ou Município:
                    {
                        municipios.length > 0 ? (
                        <select
                            className="form-select inputState"
                            value={cidade}
                            onChange={(e) =>setCidade(e.target.value)}
                        >
                            {municipios.map((municipio, i) => (
                                <option key={i}>{municipio.nome}</option>
                            ))}
                        </select>
                        ) : <p>Carregando.......</p>
                    }
                    </label>
                </div>

                <div className="containerCPFandRG">
                    <h2>
                        * Dados para RG – Carteira de Identidade
                    </h2>
                    <div className="rgCpfFlex">

                        <label htmlFor="cpf">* CPF:
                            <InputMask
                                id="cpf"
                                mask="999.999.999-99"
                                value={cpf}
                                onChange={handleCpfChange}
                                className="form-control"
                                placeholder='CPF'
                            />
                        </label>
                                   
                        <label className="rgLabel">
                        * RG:
                        <InputMask
                            id="rg"
                            mask="99.999.999-9"
                            value={rg}
                            onChange={handleRgChange}
                            className="form-control"
                            placeholder='RG'
                        />
                        </label>
                    </div>
                    <div className="emissorRgAndName">
                        <label>
                        * Estado Emissor do RG:
                        <select className='form-control inputEstadoEmissor' value={selectedEstado} onChange={handleEstadoChange}>
        <option value="">Selecione um estado</option>
        {estados.map((sigla, index) => (
          <option key={index} value={sigla}>
            {sigla}
          </option>
        ))}
      </select>
      {selectedEstado && <p>Você selecionou: {selectedEstado}</p>}
                        </label>
                
                        <label className="containerFullName">
                        * Nome Completo:
                        <input
                            type="text"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                            className="form-control"
                            id="completName"
                            placeholder="Nome Completo" aria-label="Nome Completo"
                        />
                        </label>
                    </div>
                    <div className="containerSocialName">
                        <label className="labelSocialName">
                        Nome Social:
                            <input
                                type="text"
                                value={nomeSocial}
                                onChange={(e) => setNomeSocial(e.target.value)}
                                className="form-control socialNameInput"
                                placeholder="Nome Social" aria-label="Nome Social"
                            />
                        </label>
                        <div className='containerSexSelectionLabel'></div>
                        <label className="labelFormGener">* Sexo:</label>
                                <label className="labelSexMasc" htmlFor="masculino">
                                <span className={`option ${sexo === 'masculino' ? 'selected' : ''}`}>
                                    <input
                                    type="radio"
                                    id="masculino"
                                    name="sexo"
                                    value="masculino"
                                    checked={sexo === 'masculino'}
                                    onChange={handleSexoChange}
                                    />
                                    Masculino
                                </span>
                                </label>
                                <label htmlFor="feminino">
                                <span className={`option ${sexo === 'feminino' ? 'selected' : ''}`}>
                                    <input
                                    type="radio"
                                    id="feminino"
                                    name="sexo"
                                    value="feminino"
                                    checked={sexo === 'feminino'}
                                    onChange={handleSexoChange}
                                    />
                                    Feminino
                                </span>
                        </label>
                        <label className="labelForOther" htmlFor="outro">
                        <span className={`option ${sexo === 'outro' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                id="outro"
                                name="sexo"
                                value="outro"
                                checked={sexo === 'outro'}
                                onChange={handleSexoChange}
                            />
                                    Outro
                                </span>
                            </label>
                    </div>
                    <div className='containerWhatsAppAndNascimento'>
                    <label className="labelDataNascimento" htmlFor="dataNascimento">
                    * Nascimento:
                    <InputMask
                        id="dataNascimento"
                        mask="99/99/9999"
                        value={nascimento}
                        onChange={handleDataNascimentoChange}
                        placeholder="dd/mm/aaaa"
                        className="form-control socialNameInput"
                    />
                    </label>
                    <div className="containerWhatsaApp">
                            <p>
                                Caso você tenha dificuldade em preencher o formulário,
                                entre em contato conosco que te ajudaremos
                            </p>
                            <img
                                src={ exclamaLana }
                                alt="exclamação colorido simbolo oficial da conectando soluções"
                                className="img-exclamaLana"
                            />
                            <a href="https://wa.me/5511934918634" className="whatsapp-button-forms" >
                                <span className="whatsapp-icon-forms" />
                                <span className="whatsapp-phone-forms">(11) 93491-8634</span>
                            </a>
                    </div>
                </div>
                </div>
                {mensagemAviso.length > 0 && <p>{mensagemAviso}</p>}
               
        <footer className="containerButtonSubmit">
          <button
            disabled={!isFormValid()}
          >
            <span>Continuar</span>
          </button>
        </footer>
            </form>
        </div>
);
}