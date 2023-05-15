import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Privacity from '../pages/PrivacityForms/Privacity';
import AllPages from '../AllPages';

export default function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllPages} />
          <Route exact path="/privacity" component={Privacity} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    );
  }