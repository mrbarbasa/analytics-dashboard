import './Dashboard.scss';
import ChartContainer from 'containers/ChartContainer/ChartContainer';
import ListContainer from 'containers/ListContainer/ListContainer';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <ChartContainer />
        <ListContainer />
      </div>
    );
  }
}

export default Dashboard;