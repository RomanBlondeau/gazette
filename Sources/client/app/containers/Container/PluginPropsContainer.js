import { connect } from 'react-redux';
import PluginProps from '../../components/App/NewsletterInterface/PluginProps/PluginProps';
import containerAction from '../../actions/Container/container.actions';

const mapStateToProps = state => ({
  plugins: state.container.plugins,
  rows: state.container.rows,
  id: state.container.id
});

const mapDispatchToProps = dispatch => ({
  onUpdate: (event, toUpdate, name) => {
    dispatch(
      containerAction.updatePlugin({ target: event.target, toUpdate, name })
    );
  },

  deletePlugin: id => {
    dispatch(containerAction.deletePlugin(id));
  },

  deleteRow: id => {
    dispatch(containerAction.deleteRow(id));
  }
});

const PluginPropsVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(PluginProps);

export default PluginPropsVisible;
