import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

import CamposObrigatorios from '../../../components/CamposObrigatorios/CamposObrigatorios';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './SegundaPartePrimeiraVia.styles.css';

export default function SegundaPartePrimeiraVia() {
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const [disablesButton, setDisabledButton] = useState(true);

    const history = useHistory();

    const handleChange = (e) => {
        setTelefone(e.target.value);
        let numeros = e.target.value.replace(/\D/g, "");
        const validaTelefone = numeros.length === 11
        if (validaTelefone && emailValido) {
            setDisabledButton(false);
        }
    };

    const validateInputs = (e) => {
        e.preventDefault();
        const local = JSON.parse(localStorage.getItem('data'));
        
        local[0].email = email;
        local[0].telefone = telefone;
        localStorage.setItem('data', JSON.stringify(local));
        // console.log(emailValido);
        history.push('/postoDeAtendimento');
    }

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
                    <CamposObrigatorios />
                    <form action="">
                        <div className="containerInputSegundaParte">
                            <label htmlFor="inputTelefone">
                            * Telefone com DDD:
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
                                * E-mail:
                                {' '}
                                <InputMask
                                    mask={/\S+@\S+\.\S+/}
                                    value={email}
                                    onChange={handleEmail}
                                    id="inputEmail"
                                    placeholder='E-mail'
                                    className="form-control inputEmailSegundaParte"
                                />
                                {!emailValido && <span style={{ color: 'red' }}>e-mail inválido</span>}
                            </label>
                        </div>
                        <div className="secondBottomForms">
                            <button
                                onClick={(e) => validateInputs(e)}
                                disabled={ disablesButton }
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