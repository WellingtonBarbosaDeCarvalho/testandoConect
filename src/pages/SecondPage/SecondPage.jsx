import ButtonContact from '../../components/ButtonContact';
import './SecondPage.styles.css';

export default function Services() {
    return (
        <div className="containerSecondPage">
            <div>
                <p className="paragraphSecondPage">
                    Agendamento de atendimento no
                    <br />
                    Poupatempo.
                    <br />
                    Solicitação do RG 1° e 2° via.
                </p>
            <p className='serviceTaxSecondPage'>
                Taxa de serviço: R$22,90
            </p>
            </div>
            <div className='divButtonSecondPage'>
                <ButtonContact />
            </div>
        </div>
    )
}