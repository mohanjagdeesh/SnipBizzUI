import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Careers from "./components/Careers";
import TermsConditions from "./components/TermsConditions";
import Faq from "./components/Faq";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/terms" component={TermsConditions} />
      <Route exact path="/faq" component={Faq} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
