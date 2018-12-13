import { connect } from 'react-redux';
import Column from '../../components/App/NewsletterInterface/Plugin/Column';
import containerAction from '../../actions/Container/container.actions';

const mapStateToProps = state => ({
  rows: state.container.rows
});

const mapDispatchToProps = dispatch => ({
  update: (plugin, rowUpdate, columnId) => {
    dispatch(containerAction.addPluginToRow(plugin, rowUpdate, columnId));
  }
});

const ColumnVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);

export default ColumnVisible;
