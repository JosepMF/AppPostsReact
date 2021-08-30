import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { AccountPage } from "../pages/AccountPage";
import { HomePage } from "../pages/HomePage";
import { IndexPage } from "../pages/IndexPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";

export function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/home" component={HomePage} />

      <Route path="/account" component={AccountPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
