import { connect } from 'react-redux';
import View from '../../components/App/NewsletterInterface/View/View';
import containerAction from '../../actions/Container/container.actions';

const mapStateToProps = state => ({
  rows: state.container.rows,
  projectId: state.container.projectId
});

const mapDispatchToProps = dispatch => ({
  update: row => {
    dispatch(containerAction.addRow(row));
  },

  initContainer: container => {
    dispatch(containerAction.initContainer(container));
  }
});

const ViewVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default ViewVisible;
