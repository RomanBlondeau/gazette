// @flow
import React, { Component } from 'react';
import css from './Homepage.scss';
import { withStyles } from '@material-ui/core/styles';
import MailCard from './mailCard/MailCard';
import Button from '@material-ui/core/Button/Button';

type Props = {
  classes: object
};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  },
  button: {
    backgroundColor: 'pink'
  }
});

class Homepage extends Component<Props> {
  props: Props;

  render() {
    const { classes, projects } = this.props;
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <h3>My creations</h3>
            <button className={css.mainButton}>Create new email</button>
          </div>
          <div className={css.projectsContainer}>
            {projects.map(project => (
              <MailCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
