import ButtonContact from '../../components/ButtonContact';
import './PaymentMethods.styles.css';

export default function PaymentMethod() {
  return (
      <section className="containerPaymentMethod">
        <p>
        Após a confirmação do pagamento da taxa de serviço, é que o agendamento será confirmado através do WhatsApp ou e-mail,
        e o prazo aproximado em média é de 12 dias após a confirmação do pagamento.
        </p>
        <div className="containerImgBoletoAndPix">
        <ButtonContact />
        </div>
      </section>
  )
}
