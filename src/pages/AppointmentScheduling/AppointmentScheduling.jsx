import './AppointmentScheduling.styles.css';

import atendente from '../../assets/atendenteConectando.png';

export default function AppointmentScheduling() {
  return (
      <section className="containerAppointmentScheduling">
        <img
          src={ atendente }
          alt="atendente conectando soluções"
        />
      </section>
  )
}
