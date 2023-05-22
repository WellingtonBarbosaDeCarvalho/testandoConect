import { Link } from "react-router-dom";

export default function Menu() {
  return (
      <div>
        <Link to="/">
          Home
        </Link>
        {' '}
        <Link to="/formulario">
          Agendamento
        </Link>
        {' '}
        <Link to="/privacity">
          Política de privacidade
        </Link>
      </div>
  )
}
