import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from 'containers/App/App';
import Dashboard from 'containers/Dashboard/Dashboard';
import Login from 'containers/Login/Login';

// Note: Need to define routes as a prop to Router component
//   or else this error will be thrown:
//   `Warning: [react-router] You cannot change <Router routes>; it will be ignored`
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
  </Route>
);

class AnalyticsDashboardRouter extends React.Component {
  render() {
    return <Router history={hashHistory} routes={routes} />;
  }
}

export default AnalyticsDashboardRouter;