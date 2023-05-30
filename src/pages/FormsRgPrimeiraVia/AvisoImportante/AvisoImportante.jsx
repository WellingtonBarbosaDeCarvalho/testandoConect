// import { MercadoPago } from 'mercadopago';
import { useHistory } from 'react-router-dom';
import './AvisoImportante.styles.css';

// MercadoPago.configure({
//     access_token: 'SEU_ACCESS_TOKEN',
//   });

export default function AvisoImportante() {
    const history = useHistory();

    return (
        <div className="containerAvisoImportante">
            <div className="containerAvisoImportanteTitle">
                <h1>RG - Carteira de Identidade</h1>
                <h5>Pedido de Documento</h5>
                <div className="containerButtonPayment">
                    <div className='containerButtonPaymentNow'>
                        <button
                            type='button'
                            className='buttonPaymentPadrao'
                        >
                            <span>
                                <a href='https://www.mercadopago.com.br/hub/registration/landing'>DESEJO FAZER O PAGAMENTO AGORA</a>
                            </span>
                        </button>
                        <p>
                        *Ao clicar no botão acima,
                        você será redirecionado ao ambiente de pagamento do Mercado Pago para finalizar o processo de pagamento com segurança.
                        </p>
                    </div>
                    <div className='containerButtonAfter'>
                        <button
                            type='button'
                            className='buttonPaymentPadrao'
                            onClick={() => {
                                history.push('/paymentAfter')
                            }}
                        >
                            <span>QUERO FAZER O PAGAMENTO DEPOIS</span>
                        </button>
                        <p>
                            *O Comprovante de transferência deve ser enviado em até <em>48h</em> ao <em><br />e-mail: Sac.conectandosolucoes@gmail.com</em>
                            ou via <em>WHATSAPP: <br /> (11) 93491-8634</em> <br /> ao número da empresa.
                        </p>
                    </div>
                       
                    
                </div>
                <div className='containerTitleH3'>
                    <h3>Leia o aviso abaixo</h3>
                </div>
                <div className="containerAvisoFull">
                    <h3>IMPORTANTE</h3>
                    <p>
                        Após a confirmação de seu pagamento em nosso sistema,
                        você receberá via e-mail e Whatsapp o protocolo de agendamento contendo data,
                        hora e local marcados para seu atendimento.
                    </p>
                    <h4>NÃO VÁ AO POSTO SEM O PROTOCOLO DE ATENDIMENTO</h4>
                    <p>O agendamento será marcado para a data mais próxima após a confirmação do pagamento.</p>
                </div>
            </div>
        </div>
    );
}
