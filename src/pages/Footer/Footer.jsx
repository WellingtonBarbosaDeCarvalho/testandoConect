import './Footer.styles.css';

import ideias from '../../assets/Ideias.png';
import exclamacao from '../../assets/Headline.png';

export default function Footer() {
  return (
      <section className="containerFooter">
        <div className="containerImgFooter">
            <img
                src={ ideias }
                alt="Imagem com 3 pessoas uma delas segurando lampadas que representam soluções"
            />
        </div>
        <div className="containerParagraphFooter">
            <div className='imgFooterContainer'>
                <img
                    src={ exclamacao }
                    alt="Logo do marca conectando soluções by: lana"
                    className='exclamacaoLanaFooter'
                />
            </div>
            <div className='containerParagraphTest'>
                <p className="paragraphFooter">
                    Que bom que você chegou até aqui
                    <br />
                    Vamos falar um pouco sobre nossa empresa! 
                    Somos uma agência de prestação de serviços, que oferecemos de forma alternativa soluções para o seu bem estar e comodidade. 
                    Além do serviço de agendamento do RG, também oferecemos consultas de terapia alternativa (emocional), com o propósito de ajudar nossos clientes a buscarem soluções para seu próprio bem estar e segurança.
                    Caso tenha interesse, agende conosco uma consulta de terapia, que teremos enorme prazer de lhe atender!
                </p>
            </div>
        </div>
      </section>
  )
}
