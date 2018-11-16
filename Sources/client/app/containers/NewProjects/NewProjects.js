import { connect } from 'react-redux';
import NewProject from '../../components/App/Homepage/NewProject/NewProject';
import userActions from '../../actions/User/user.actions';

const mapStateToProps = state => ({
  userId: state.authentication.user.id
});

const mapDispatchToProps = dispatch => ({
  onCreate: userId => {
    dispatch(userActions.getProjects(userId));
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProject);

export default VisibleDoLogin;
