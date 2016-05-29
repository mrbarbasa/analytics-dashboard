import { Provider } from 'react-redux';
import AnalyticsDashboardRouter from 'routes/AnalyticsDashboardRouter';
import DevTools from 'containers/DevTools/DevTools';

class Root extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <AnalyticsDashboardRouter />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;