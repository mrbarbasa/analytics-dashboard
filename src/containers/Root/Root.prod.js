import { Provider } from 'react-redux';
import AnalyticsDashboardRouter from 'routes/AnalyticsDashboardRouter';

class Root extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <AnalyticsDashboardRouter />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;