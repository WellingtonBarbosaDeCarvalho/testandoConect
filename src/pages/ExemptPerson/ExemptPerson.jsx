import './ExemptPerson.styles.css';

export default function ExemptPerson() {
  return (
      <section className="containerExemptPerson">
        <div className="containerTitleExemptPerson">
            <h1 className="titleExemptPerson">Caso você se classifique como uma pessoa isenta:</h1>
        </div>
        <ul className="listIsentPerson">
            <li>
                Em casos de furto do documento, até 30 dias após o registro do B.O;
            </li>
            <li>
                Mulheres a partir de 60 e homens a partir de 65 anos;
            </li>
            <li>
                Desempregados por período superior a 3 meses,
                com apresentação da Carteira de Trabalho e Previdência Social;
            </li>
            <li>
                Cidadãos em situação de pobreza ou extrema pobreza,
                apresentando o Número de Identificação Social (NIS);
            </li>
            <li>
                Erros de digitação no documento percebidos até 90 dias após recebimento da via anterior;
            </li>
            <li>
                Documento danificado ou extraviado devido a desastres naturais,
                apresentando o B.O em até 90 dias após o acontecimento.
            </li>
        </ul>
        <h2 className="poupaTempoOrgao">
            <span>*</span>Informar junto ao orgão físico do Poupatempo.
        </h2>
      </section>
  )
}
