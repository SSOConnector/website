import logo from './logo.svg';
import './App.scss';
// import 'semantic-ui-css/semantic.min.css'
import Home from './pages/home'
import Pricing from './pages/pricing'
import OneLoginSetup from './pages/docs/setup/onelogin_setup'
import OktaSetup from './pages/docs/setup/okta_setup'
import Setup from './pages/docs/setup'
import Guide from './pages/docs/guide'
import CompleteSsoSetup from './pages/docs/guide/complete_sso_setup'
import ClientOnboardingAutomation from './pages/docs/guide/client_onboarding_automation'
import GettingStartedSAML from './pages/docs/guide/getting_started_saml'
import Api from './pages/docs/api'
import References from './pages/docs/references'
import Docs from './pages/docs'
import NotFound from './pages/not_found'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/docs">
          <Docs />
        </Route>
        <Route exact path="/docs/guide">
          <Guide />
        </Route>
        <Route exact path="/docs/guide/complete-sso-setup">
          <CompleteSsoSetup />
        </Route>
        <Route exact path="/docs/guide/client-onboarding-automation">
          <ClientOnboardingAutomation />
        </Route>
        <Route exact path="/docs/guide/getting-started-saml">
          <GettingStartedSAML />
        </Route>
        <Route exact path="/docs/api">
          <Api />
        </Route>
        <Route exact path="/docs/references">
          <References />
        </Route>
        <Route exact path="/docs/setup">
          <Setup />
        </Route>
        <Route path="/docs/setup/okta">
          <OktaSetup />
        </Route>
        <Route path="/docs/setup/onelogin">
          <OneLoginSetup />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
