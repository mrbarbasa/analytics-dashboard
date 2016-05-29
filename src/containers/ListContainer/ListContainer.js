import { connect } from 'react-redux';
import './ListContainer.scss';

export class ListContainer extends React.Component {
  render() {
    return (
      <div className="list-container">
        <h1>List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchases: state.list.listPurchases
  };
};

export default connect(
  mapStateToProps,
  {}
)(ListContainer);