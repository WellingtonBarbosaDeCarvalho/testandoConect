import './ServiceCharge.styles.css';

import modeloCelular from '../../assets/modelo_com_celular.png';
import pix from '../../assets/logo_pix.png';
import boleto from '../../assets/boleto.png';

export default function ServiceCharge() {
  return (
      <div className="containerServiceCharge">
        <div className="containerParagraphCharge">
            <p>
                Taxa de serviço 
                <br />
                R$22,90
                <br />
                Facilidade para o
                <br />
                pagamento: Pix e Boleto.
            </p>
            <div className="containerPix">
                <img
                    src={ pix }
                    alt="Modelo segurando celular com o logo conectando soluções"
                    className="pix"
                />
                <img
                    src={ boleto }
                    alt="Modelo segurando celular com o logo conectando soluções"
                    className='boleto'
                />
            </div>
        </div>
        <div className="imgContainerCharge">
            <img
                src={ modeloCelular }
                alt="Modelo segurando celular com o logo conectando soluções"
            />
        </div>
      </div>
  )
}
