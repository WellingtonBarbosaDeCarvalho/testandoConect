import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

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
              <label htmlFor="" className="labelSelectTerceiraParte">
                Posto de Atendimento:{' '}
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
              <h4>Em que dia e hora deseja ser atendido(a)? (Como PRIMEIRA Opção)</h4>
            </div>
            <div className="containerSelectTurn">
              <label htmlFor="">
                Em qual turno?{' '}
                <select
                  type="text"
                  className="form-control containerInputSelectTurn"
                  value={selectedTurno}
                  onChange={handleTurnoChange}
                >
                  <option>Início da manhã - Entre 09:00 e 11:00</option>
                <option>Fim da manhã - Entre 11:00 e 12:00</option>
                <option>Início da tarde - Entre 12:00 e 14:00</option>
                <option>Fim da tarde - Entre 14:00 e 17:00</option>
                <option>Qualquer turno - Qualquer horário</option>
                </select>
                </label>
                </div>
                <div className="form-check containerRadiosTerceiraParte">
                <h6>Serviço a ser Agendado:</h6>
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
                <h6>Nacionalidade:</h6>
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
                </form>
                </div>
                </div>
                </div>
    );
}
