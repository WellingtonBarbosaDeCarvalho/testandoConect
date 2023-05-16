import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import InputMask from 'react-input-mask';

import './FormsRgPrimeiraVia.styles.css';

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

    const history = useHistory();
  
    useEffect(() => {
        const fetchMunicipios = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios');
            const data = await response.json();
            return setMunicipios(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchMunicipios();
    }, []);

    const handleCpfChange = (event) => {
        const formattedCpf = event.target.value.replace(/\D/g, '');
        setCpf(formattedCpf);
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
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aqui você pode fazer o envio dos dados para o servidor ou realizar outras ações necessárias
    };
  
    return (
        <div className="containerFormsContact">
            <div className="containerTitleForms">
                <h1>
                    RG - Carteira de Identidade
                </h1>
                <h5>
                    pedido de documento
                </h5>
            </div>
            <form className="forms-container" onSubmit={handleSubmit}>
                <div className="containerStateMunici">
                    <h3>
                        Local do Agendamento:
                    </h3>
                    <label>
                    Estado:
                    <select
                        className="form-select inputState"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)
                        }
                    >
                        <option value="São Paulo">São Paulo</option>
                    </select>
                    </label>
                    <label>
                        Cidade ou Município:
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
                        Dados para RG – Carteira de Identidade
                    </h2>
                    <div className="rgCpfFlex">

                        <label htmlFor="cpf">CPF:
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
                        RG:
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
                        Estado Emissor do RG:
                        <input
                            type="text"
                            value={estadoEmissor}
                            onChange={(e) => setEstadoEmissor(e.target.value)}
                            className="form-control"
                            placeholder="Estado Emissor do RG" aria-label="Estado Emissor do RG"
                        />
                        </label>
                
                        <label className="containerFullName">
                        Nome Completo:
                        <input
                            type="text"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                            className="form-control"
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
                        <label className="labelFormGener">Sexo:</label>
                            <div>
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
                    </div>
                    <label htmlFor="dataNascimento">
                    Nascimento:
                    <InputMask
                        id="dataNascimento"
                        mask="99/99/9999"
                        value={nascimento}
                        onChange={handleDataNascimentoChange}
                        placeholder="dd/mm/aaaa"
                        className="form-control socialNameInput"
                    />
                    </label>
                </div>
                </div>
                <footer className="containerButtonSubmit">
                    <button
                        onClick={() => {
                            const data = [{
                                estado,
                                cidade,
                                cpf,
                                rg,
                                estadoEmissor,
                                nomeCompleto,
                                nomeSocial,
                                sexo,
                                nascimento,
                            }];
                            localStorage.setItem('data', JSON.stringify(data));
                            return history.push('/formularioContact')
                        }
                        }
                    >
                        <span>
                        Continuar
                        </span>
                    </button>
                </footer>
            </form>
        </div>
);
}