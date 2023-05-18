import './ImportantGuidelines.styles.css';

export default function ImportantGuidelines() {
  return (
      <section className="containerImportantGuidelines">
        <div className='containerTitleImportanteGuidelines'>
            <h1 className="titleImportanteGuidelines">Orientações importantes para a realização do seu RG:</h1>
        </div>
        <ul className="listOrientationGuidelines">
            <li>
                Não é necessário levar foto, pois ela é tirada no local;
            </li>
            <li>
                Opte por roupas escuras;
            </li>
            <li>
                É autorizado fotos com piercing, mas acessórios como brincos muito grandes não podem ser usados,
                pois dificultarão a identificação da pessoa;
            </li>
            <li>
                Muçulmanos podem tirar foto com lenço; e freiras, com tradicional hábito, porém,
                sendo necessário apresentar o comprovante a entidade religiosa original ou cópia simples;
            </li>
            <li>
                Adornos na cabeça não são autorizados (chapéu, bonés etc);
            </li>
            <li>
                O uso de óculos é permitido somente quando sua não utilização causa algum constrangimento,
                se não, os olhos devem estar totalmente visíveis;
            </li>
            <li>
                Não é permitido o uso de maquiagem carregada;
            </li>
            <li>
                A fisionomia deve ser neutra ou com um sorriso discreto,
                desde que os lábios se mantenham fechados, sem franzir o rosto.
            </li>
        </ul>
        <div className='titleBabesGuidelinesDiv'>
            <h1 className="titleBabesGuidelines">
                Bebês
            </h1>
        </div>
        <ul className="listGuidelinesForBaby">
            <li>
            Quando se trata de criança a mesma deve estar sem chupeta e as mãos ou qualquer
            parte do corpo da pessoa que estiver a segurando não podem aparecer na foto;
            </li>
            <li>
                É importante saber também que não é exigido que os recém-nascidos saiam com os
                olhos abertos.
            </li>
        </ul>
      </section>
  )
}