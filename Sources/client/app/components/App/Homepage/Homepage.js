// @flow
import React, { Component } from 'react';
import css from './Homepage.scss';
import { withStyles } from '@material-ui/core/styles';
import MailCard from './MailCard/MailCard';
import Modal from '@material-ui/core/Modal/Modal';
import NewProject from './NewProject/NewProject';

type Props = {
  classes: object,
  projects: array,
  onCreate: func,
  onDelete: func,
  userId: number
};

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  },
  button: {
    backgroundColor: 'pink'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class Homepage extends Component<Props> {
  props: Props;

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, projects, onCreate, userId, onDelete } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <h3>My creations</h3>
            <button className={css.mainButton} onClick={this.handleOpen}>
              Create new project
            </button>
          </div>
          <div className={css.projectsContainer}>
            {projects.map(project => (
              <MailCard
                project={project}
                key={project.id}
                onDelete={onDelete}
              />
            ))}
          </div>

          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <NewProject
                onCreate={onCreate}
                userId={userId}
                handleClose={this.handleClose}
              />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
