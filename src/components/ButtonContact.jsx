import { Link } from 'react-router-dom';
import './ButtonContact.styles.css';

export default function ButtonContact() {
    return (
        <Link
                type="button"
                className="buttonAboutServices"
                to="/formulario"
            >
                <span>
                    Faça seu
                    <br />
                    agendamento
                </span>
            </Link>
    )
  }