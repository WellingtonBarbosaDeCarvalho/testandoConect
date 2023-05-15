import './Header.styles.css';

import exclamacao from '../../assets/Headline.png';
import modeloConectando from '../../assets/modeloConectando.png'

export default function Header() {
    return (
        <div className="containerHeader">
            <div className="containerTitleHeader">
                <h1 className="titleHeader">Conectando
                <br/>
                    Soluções!
                </h1>
                <img
                    src={ exclamacao }
                    alt="ponto de exclamação create for: Lana"
                    className="exclamacaoLana"
                />
            </div>
            <div className="containerElipseAndExcla">
                <img
                        src={ modeloConectando }
                        alt="modelo apresentando um RG em suas mãos"
                        className="conectandoModels"
                    />
            </div>
        </div>
    )
}