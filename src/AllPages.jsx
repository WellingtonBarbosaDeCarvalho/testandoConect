import Header from './pages/Header/Header';
import SecondPage from './pages/SecondPage/SecondPage';
import AboutServices from './pages/./AboutServices/AboutServices';
import Goal from './pages/Goal/Goal';
import AppointmentScheduling from './pages/AppointmentScheduling/AppointmentScheduling';
import PageAtention from './pages/PageAtention/PageAtention';
import ServiceCharge from './pages/ServiceCharge/ServiceCharge';
import PaymentMethod from './pages/PaymentMethods/PaymentMethods';
import ImportantGuidelines from './pages/ImportantGuidelines/ImportantGuidelines';
import ExemptPerson from './pages/ExemptPerson/ExemptPerson';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import DivulgaTerapia from './pages/DivulgaTerapia/DivulgaTerapia';
import Menu from './components/Menu/Menu';

import './App.css';

export default function AllPages() {
  return (
      <>
        <aside className="containerMenuHeader">
          <Menu />
        </aside>
        <Header />
        <SecondPage />
        <Goal />
        <AppointmentScheduling />
        <ServiceCharge />

        <PaymentMethod />
        <PageAtention />
        <ImportantGuidelines />
        <ExemptPerson />
        <Contact />
        <AboutServices />
        <Footer />
        <DivulgaTerapia />
      </>
  )
}
