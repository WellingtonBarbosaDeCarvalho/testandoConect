import ButtonContact from '../../components/ButtonContact';
import './PaymentMethods.styles.css';

export default function PaymentMethod() {
  return (
      <section className="containerPaymentMethod">
        <p>
        E só após a confirmação do pagamento da taxa de serviço,
        é que o agendamento será confirmado através do WhatsApp ou email,
        e o prazo aproximado em média é de 15 dias após a confirmação do pagamento.
        </p>
        <div className="containerImgBoletoAndPix">
        <ButtonContact />
        </div>
      </section>
  )
}
