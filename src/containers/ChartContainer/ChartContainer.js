import { connect } from 'react-redux';
import './ChartContainer.scss';

export class ChartContainer extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <h1>Chart</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchases: state.chart.chartPurchases
  };
};

export default connect(
  mapStateToProps,
  {}
)(ChartContainer);