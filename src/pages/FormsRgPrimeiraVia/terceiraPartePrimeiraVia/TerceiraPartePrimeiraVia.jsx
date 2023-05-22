import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import CampoObrigatorios from '../../../components/CamposObrigatorios/CamposObrigatorios';

// const emailServiceId = 'service_479y2ns';
// const emailTemplateId = 'template_9k2x8fd';
// const emailUserId = 'SEU_USER_ID';

// Configuração do provedor de e-mail
// emailjs.init(emailServiceId);

import './TerceiraPartePrimeiraVia.styles.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SegundaPartePrimeiraVia() {
  const [poupatempos, setPoupaTempos] = useState([]);
  const [selectedPosto, setSelectedPosto] = useState('POUPATEMPO ALESP');
  const [selectedTurno, setSelectedTurno] = useState('Início da manhã - Entre 09:00 e 11:00');
  const [selectedService, setSelectedService] = useState('1° via do RG');
  const [selectedNationality, setSelectedNationality] = useState(
    'Brasileiro Nato (nascido aqui)'
  );

  const history = useHistory();

  useEffect(() => {
    const fetchPoupaTempos = async () => {
      try {
        const response = await fetch(
          'https://forms.mondiconect.com/api/field-by-names/poupatempo'
        );
        const data = await response.json();

        setPoupaTempos(data.field_values);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPoupaTempos();
  }, []);

  const handlePostoChange = (event) => {
    setSelectedPosto(event.target.value);
  };

  const handleTurnoChange = (event) => {
    setSelectedTurno(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setSelectedNationality(event.target.value);
  };

  const sendEmail = async () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const filteredMessage = `
    Nome do cliente: ${data[0].nomeCompleto},
    Cpf: ${data[0].cpf},
    Rg: ${data[0].rg},
    Telefone: ${data[0].telefone},
    Nacionalidade: ${data[0].nacionalidade},
    Sexo: ${data[0].sexo},
    Nascimento: ${data[0].nascimento},
    Nome Social: ${data[0].nomeSocial},
    E-mail: ${data[0].email},
    Cidade: ${data[0].cidade},
    Estado: ${data[0].estado},
    Estado Emissor: ${data[0].estadoEmissor},
    Serviço escolhido: ${data[0].service},
    Posto Escolhido: ${data[0].posto},
    Turno escolhido: ${data[0].turno},
    `;

    const templateParams = {
      from_name: data[0].nomeCompleto,
      message: filteredMessage,
      email: data[0].email,
    }
    emailjs.send("service_479y2ns", "template_9k2x8fd", templateParams, "zW5ZeVJUu3tIn6RMB")
    .then((response) => {
      console.log('email enviado', response.status, response.text);
    }, (err) => {
      console.log(err.message);
    })
    ;
  };

  const validateInput = (e) => {
    e.preventDefault();
    const local = JSON.parse(localStorage.getItem('data'));
        
    local[0].posto = selectedPosto;
    local[0].turno = selectedTurno;
    local[0].service = selectedService;
    local[0].nacionalidade = selectedNationality;

    localStorage.setItem('data', JSON.stringify(local));
    sendEmail();

    history.push('/aviso')
}

  return (
    <div className="containerTerceiraPartePrimeiraVia">
      <div className="containerFormTerceiraParte">
        <div className="containerTitleTerceiraParte">
          <h1>RG - Carteira de Identidade</h1>
          <h5>Pedido de Documento</h5>
        </div>
        <div className="containerTitleTerceiraParteTwo">
          <form action="">
                <div className="containerInputSelectTerceiraParte">
                <h3>Selecione um dos Postos abaixo</h3>
                    <CampoObrigatorios />
                <label htmlFor="" className="labelSelectTerceiraParte">
                    * Posto de Atendimento:{' '}
                    {poupatempos.length > 0 ? (
                    <select
                        type="text"
                        className="form-control inputSelectTerceiraParte"
                        value={selectedPosto}
                        onChange={handlePostoChange}
                    >
                        {poupatempos.map((poupatempo, i) => (
                        <option value={poupatempo.value} key={i}>
                            {poupatempo.value}
                        </option>
                        ))}
                    </select>
                    ) : (
                    <h3>Carregando....</h3>
                    )}
                </label>
                <h4>Em que dia e hora deseja ser atendido(a) ?</h4>
                </div>
                <div className="containerSelectTurn">
                <label htmlFor="">
                    * Em qual turno?{' '}
                    <select
                    type="text"
                    className="form-control containerInputSelectTurn"
                    value={selectedTurno}
                    onChange={handleTurnoChange}
                    >
                        <option>Turno da MANHÃ - Entre 07:00 e 12:00</option>
                        <option>Turno da TARDE - Entre 12:00 e 19:00</option>
                        <option>Qualquer turno - Qualquer horário</option>
                    </select>
                    </label>
                    </div>
                    <div className="form-check containerRadiosTerceiraParte">
                    <h6>* Serviço a ser Agendado:</h6>
                        <input
                            className="form-check-input"
                            type="radio"
                            name="service_option"
                            id="service_option_1"
                            value="1° via do RG"
                            checked={selectedService === '1° via do RG'}
                            onChange={handleServiceChange}
                        />
                        <label className="form-check-label" htmlFor="service_option_1">
                            1° Via, nunca tirei RG em São Paulo
                        </label>
                    </div>
                    <div className="form-check containerRadiosTerceiraParte">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="service_option"
                        id="service_option_2"
                        value="2° via do RG"
                        checked={selectedService === '2° via do RG'}
                        onChange={handleServiceChange}
                        />
                        <label className="form-check-label" htmlFor="service_option_2">
                        2° Via, já tirei antes RG em São Paulo
                        </label>
                    </div>
                    <div className="form-check containerRadiosTerceiraParte">
                        <h6>* Nacionalidade:</h6>
                        <input
                        className="form-check-input"
                        type="radio"
                        name="nationality_option"
                        id="nationality_option_1"
                        value="Brasileiro Nato (nascido aqui)"
                        checked={selectedNationality === 'Brasileiro Nato (nascido aqui)'}
                        onChange={handleNationalityChange}
                        />
                        <label className="form-check-label" htmlFor="nationality_option_1">
                        Brasileiro Nato (nascido aqui)
                        </label>
                    </div>
                        <div className="form-check containerRadiosTerceiraParte">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="nationality_option"
                          id="nationality_option_2"
                          value="Brasileiro Naturalizado (de outro país) ou cidadão com Título de Igualdade"
                          checked={
                          selectedNationality ===
                          'Brasileiro Naturalizado (de outro país) ou cidadão com Título de Igualdade'
                        }
                          onChange={handleNationalityChange}
                        />
                        <label className="form-check-label" htmlFor="nationality_option_2">
                          Brasileiro Naturalizado (de outro país) ou cidadão com Título de Igualdade
                        </label>
                    </div>
                    <footer className='threeBottomSubmit'>
                      <button
                        onClick={(e) => validateInput(e)}
                          >
                                <span>
                                Continuar
                              </span>
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    </div>
    );
}
