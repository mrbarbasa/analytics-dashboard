import './App.scss';
import Header from 'components/Sections/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;