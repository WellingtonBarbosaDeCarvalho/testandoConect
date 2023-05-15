import { useState } from 'react';
import './FormsContact.styles.css';

// function openWhatsApp() {
//     var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (isMobile) {
//       window.location.href = 'whatsapp://send?text=Sua-mensagem';
//     } else {
//       window.open('https://web.whatsapp.com/send?phone=seu-numero&text=Sua-mensagem', '_blank');
//     }
//   }

export default function FormsContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }

  return (
    <form
        action="https://formsubmit.co/devWellingtonbarbosadecarvalho@gmail.com"
        method="POST"
        id="#contactFormSubmit"
    >
    <div className="containerFormsOne">
        <label htmlFor="name">
            Nome:
            {' '}
            <input
                type="text"
                name="name" required
                id="name"
                onChange={ handleChange }
                value={ name }
                placeholder="DIGITE SEU NOME COMPLETO"
            />
        </label>
    </div>

    <div className="containerFormsOne">
        <label htmlFor="email">
            email: {' '}
            <input
                type="email"
                name="email" required
                id="email"
                placeholder="DIGITE SEU EMAIL"
                onChange={ handleChange }
                value={ email }
            />
        </label>
    <div className="containerFormsOne">
        <label htmlFor="message">
            Escreva sua mensagem.
            <textarea
                name="message"
                id="message"
                cols="20"
                rows="8"
                onChange={ handleChange }
                value={ message }
            />
        </label>
    </div>
        <input
            type="hidden"
            name="_autoresponse"
            value="Mensagem padrão, por enquanto é isso aqui."
        />
    <input type="hidden" name="_template" value="table"></input>
    </div>
    <button type="submit">Enviar</button>
</form>
  )
}
