// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import css from './Editor.scss';
import history from '../../../helpers/history';
import routes from '../../../constants/routes.json';
import NewsletterInterface from '../NewsletterInterface/NewsletterInterface';

type Props = {
  classes: object,
  projects: array,
  match: object
};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  }
});

class Editor extends Component<Props> {
  props: Props;

  render() {
    const { classes, projects, match } = this.props;
    const project = projects.find(
      el => el.id === parseInt(match.params.projectId, 10)
    );
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <button
              type="button"
              className={css.mainButton}
              onClick={() => history.push(routes.HOME)}
            >{`< Go back`}</button>
            <h3>Edit - {project.name}</h3>
            <button
              type="button"
              className={css.mainButton}
              onClick={() => {
                history.push(`/send/${project.id}`);
              }}
            >
              {`Go to sending interface >`}
            </button>
          </div>

          <div className={css.interfaceContainer}>
            <NewsletterInterface />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
