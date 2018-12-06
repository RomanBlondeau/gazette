import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import css from './NewProject.scss';

type Props = {
  onCreate: func,
  userId: number,
  handleClose: func
};

class NewProject extends React.Component {
  props: Props;

  state = {
    name: '',
    description: ''
  };

  onUpdate = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  createProject = () => {
    const { userId, onCreate, handleClose } = this.props;
    const { name, description } = this.state;
    const data = { userId, name, description };
    onCreate(data);
    handleClose();
  };

  render() {
    const { name, description } = this.state;
    return (
      <div>
        <Typography variant="h6" id="modal-title">
          Create new project
        </Typography>
        <div>
          <FormControl className={css.form}>
            <InputLabel htmlFor="adornment-username">
              Name of the project
            </InputLabel>
            <Input
              id="adornment-name"
              type="text"
              value={name}
              name="name"
              onChange={this.onUpdate}
            />
          </FormControl>
        </div>
        <div>
          <FormControl className={css.form}>
            <InputLabel htmlFor="adornment-username">Description</InputLabel>
            <Input
              id="adornment-description"
              type="text"
              value={description}
              name="description"
              onChange={this.onUpdate}
            />
          </FormControl>
        </div>
        <button className={css.mainButton} onClick={this.createProject}>
          Create
        </button>
      </div>
    );
  }
}
export default NewProject;
