import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import axios from 'axios';
import config from '../../../../config/api';
import css from './NewProject.scss';

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
    const { userId, onCreate } = this.props;
    const { name, description } = this.state;
    const data = { userId, name, description };
    axios
      .post(`${config.projects.newProject}`, data, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`
        }
      })
      .then(() => {
        onCreate(userId);
        alert(`New project ${name} created successfully`);
      })
      .catch(err => alert(err));
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
