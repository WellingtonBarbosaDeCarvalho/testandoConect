import './AboutServices.styles.css';

import exclamacaoLana from '../../assets/Headline.png';

export default function AboutServices() {
    return (
        <div className="containerAboutServices">
            <div className="containerTextServices">
                <h1 className="titleAboutServices">
                    O que
                    <br />
                    prestamos:
                </h1>
                <ul className="listServices">
                    <li>
                            Agendamentos de
                        <br />
                            primeira e segunda via de
                        <br />
                            RG.
                    </li>
                    <li>
                        Consultas de terapia alternativa.
                    </li>
                </ul>
            </div>
            <div className="containerModelServicesImage">
                <img
                    src={ exclamacaoLana }
                    alt="Modelo Conectando Soluções"
                    className="exclamaLana"
                />
            </div>
        </div>
    )
}