import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Privacity from '../pages/PrivacityForms/Privacity';
import AllPages from '../AllPages';
import FormsRgPrimeiraVia from '../pages/FormsRgPrimeiraVia/FormsRgPrimeiraVia';
import SegundaPartePrimeiraVia from '../pages/FormsRgPrimeiraVia/SegundaPartePrimeiraVia/SegundaPartePrimeiraVia';
import TerceiraPartePrimeiraVia from '../pages/FormsRgPrimeiraVia/terceiraPartePrimeiraVia/TerceiraPartePrimeiraVia';

export default function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllPages} />
          <Route exact path="/privacity" component={Privacity} />
          <Route exact path="/formularioContact" component={SegundaPartePrimeiraVia} />
          <Route exact path="/postoDeAtendimento" component={TerceiraPartePrimeiraVia} />
          <Route exact path="/formulario" component={FormsRgPrimeiraVia} />
        </Switch>
      </Router>
    );
  }