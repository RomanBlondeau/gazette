import { connect } from 'react-redux';
import Console from '../../components/App/NewsletterInterface/Console/Console';
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
  }
});

const PluginPropsVisible = connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);

export default PluginPropsVisible;
