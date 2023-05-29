import './PaymentAfter.styles.css';

export default function PaymentAfter() {
    return (
      <div className="containerPaymentAfter">
        <div className='containerTitlePaymentAfter'>
            <h1>Agradecemos pela preferência! :)</h1>
            {/* <h5>Pedido de Documento</h5> */}
        </div>
        <div className='containerParagraphPaymentAfter'>
            <h6>
                Para garantir uma experiência tranquila e eficiente,
                pedimos que nos envie o comprovante de transferência dentro de um prazo de até 48 horas.
                Você pode enviar o comprovante para o seguinte endereço de <br />e-mail:<br /><span>Sac.conectandosolucoes@gmail.com</span><br /><br />
                Além disso, se preferir, também estamos disponíveis pelo <br />WHATSAPP:<br /> <span>(11) 93491-8634.</span>
            </h6>
            <br />
            <h6>
                Agradecemos sinceramente por contratar os nossos serviços! Estamos honrados em poder atendê-lo
                e oferecer soluções que atendam às suas necessidades.
            </h6>
            <br />
            <p>
                Ficamos à disposição para qualquer dúvida ou suporte adicional que você possa precisar.
            </p>
            <h4>
                <br />Atenciosamente,
                <br />Equipe Conectando Soluções
            </h4>
        </div>
      </div>
    );
  }