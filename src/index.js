import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from 'store/configureStore';
import Root from 'containers/Root/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);