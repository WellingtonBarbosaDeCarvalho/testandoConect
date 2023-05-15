import { Link } from 'react-router-dom';
import './Contact.styles.css';

// function openWhatsApp() {
//     var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (isMobile) {
//       window.location.href = 'whatsapp://send?text=MensagemPadrão';
//     } else {
//       window.open('https://web.whatsapp.com/send?phone=seu-numero&text=Sua-mensagem', '_blank');
//     }
//   }

export default function Contact() {
  return (
      <section className="containerContact">
        <div className="containerTitleParagraph">
            <h1 className="contactTitle">Contato</h1>
            <h2 className="paragaphContact">
            Ainda está com dúvidas? Não se preocupe, entre em contato conosco, responderemos assim que possível, estamos aqui para te ajudar !
            </h2>
        <div className="containerFormsAndLinks">
            <div className="linksForms">
                <a href="https://wa.me/5511934918634" className="whatsapp-button" >
                    <span className="whatsapp-icon" />
                    <span className="whatsapp-phone">(11) 93491-8634</span>
                </a>

                <a href="mailto:Sac.conectandosolucoes@gmail.com" className="email-button">
                    <span className="email-icon" />
                    <span className="email-address">Sac.conectandosolucoes@gmail.com</span>
                </a>
            </div>
        </div>
            <footer className="containerPrivacity">
                <Link to="/privacity">Política de privacidade</Link>
                <Link to="contactForms">Formulário</Link>
            </footer>
        </div>
      </section>
  )
}
