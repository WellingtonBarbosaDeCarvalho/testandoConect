import './AvisoImportante.styles.css';

export default function AvisoImportante() {
    return (
        <div className="containerAvisoImportante">
            <div className="containerAvisoImportanteTitle">
                <h1>RG - Carteira de Identidade</h1>
                <h5>Pedido de Documento</h5>
                <div className='containerTitleH3'>
                    <h3>Leia o aviso abaixo</h3>
                </div>
                <div className="containerAvisoFull">
                    <h3>IMPORTANTE</h3>
                    <p>
                        Após a confirmação de seu pagamento em nosso sistema,
                        você receberá via e-mail o protocolo de agendamento contendo data,
                        hora e local marcados para seu atendimento.
                    </p>
                    <h4>NÃO VÁ AO POSTO SEM O PROTOCOLO DE ATENDIMENTO</h4>
                    <p>O agendamento será marcado para a data mais próxima após a confirmação do pagamento.</p>
                </div>
            </div>
        </div>
    );
}
