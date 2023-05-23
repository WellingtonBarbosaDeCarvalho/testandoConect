import { Link, useHistory } from 'react-router-dom';
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
    const history = useHistory();
    if (history.location.pathname) {
        return (
            <section className={
                history.location.pathname === '/contato' ? 'containerContact containerContactPage' : 'containerContact'
            }>
                <div className={'containerTitleParagraphPage'}>
                    <div className='containerTitleContact'>
                        <h1 className="contactTitlePage">Contato</h1>
                        <h2 className="paragaphContact">
                        Ainda está com dúvidas? Não se preocupe, entre em contato conosco, estamos aqui para te ajudar !
                        </h2>
                    </div>
                <div className="containerFormsAndLinks-page">
                    <div className="linksFormsPage">
                        <a href="https://wa.me/5511934918634" className="whatsapp-button-page" >
                            <span className="whatsapp-icon-page" />
                            <span className="whatsapp-phone-page">(11) 93491-8634</span>
                        </a>
        
                        <a href="mailto:Sac.conectandosolucoes@gmail.com" className="email-button-page">
                            <span className="email-icon-page" />
                            <span className="email-address">Sac.conectandosolucoes@gmail.com</span>
                        </a>
                    </div>
                </div>
                    <footer className="containerPrivacityPage">
                        <Link to="/privacity">Política de privacidade</Link>
                        <Link to="/formulario">Formulário</Link>
                    </footer>
                </div>
              </section>
        );
    }
  return (
      <section className={
        history.location.pathname === '/contato' ? 'containerContact containerContactPage' : 'containerContact'
    }>
        <div className={
            history.location.pathname === '/contato'
            ? "containerTitleParagraph containerTitleParagraphPage"
            : 'containerTitleParagraph'
            }>
            <h1 className="contactTitle">Contato</h1>
            <h2 className="paragaphContact">
            Ainda está com dúvidas? Não se preocupe, entre em contato conosco, estamos aqui para te ajudar !
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
                <Link to="/formulario">Formulário</Link>
            </footer>
        </div>
      </section>
  )
}
