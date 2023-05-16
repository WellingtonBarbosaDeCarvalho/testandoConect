import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './SegundaPartePrimeiraVia.styles.css';

export default function SegundaPartePrimeiraVia() {
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(true);

    const history = useHistory();

    const handleChange = (e) => {
        setTelefone(e.target.value);
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmail = (e) => {
        const valor = e.target.value;
        setEmail(valor);
        setEmailValido(emailRegex.test(valor));
      };

    return (
        <div className="containerSegundaPartePrimeiraVia">
            <div className="containerFormSegundaParte">
                <div className="containerTitleSegundaParte">
                    <h1>
                    RG - Carteira de Identidade
                    </h1>
                    <h5>
                    Pedido de Documento
                    </h5>
                </div>
                
                <div className="segundaParteInputEmail">
                    <h4>Seu dados para contato</h4>
                    <form action="">
                        <div>
                            <label htmlFor="inputTelefone">
                            Telefone com DDD:
                                {' '}
                                <InputMask
                                    mask="(99) 9 9999-9999"
                                    value={telefone}
                                    onChange={handleChange}
                                    id="inputTelefone"
                                    placeholder='Telefone com DDD'
                                    className="form-control inputTelSegundaParte"
                                />
                            </label>
                            <label htmlFor="inputEmail" className="inputEmailLabel">
                                E-mail:
                                {' '}
                                <InputMask
                                    mask={/\S+@\S+\.\S+/}
                                    value={email}
                                    onChange={handleEmail}
                                    id="inputEmail"
                                    placeholder='E-mail'
                                    className="form-control inputEmailSegundaParte"
                                />
                                {!emailValido && <span style={{ color: 'red' }}>Email inválido</span>}
                            </label>
                        </div>
                        <div className="secondBottomForms">
                            <button
                                onClick={
                                    () => {
                                        history.push('/postoDeAtendimento')
                                    }
                                }
                            >
                                <span>
                                Continuar
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}