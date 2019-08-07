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
  match: object,
  addProjectId: func
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

  constructor(props) {
    super(props);

    this.state = {
      project: {
        name: 'lorem',
        id: '0'
      }
    };
  }

  componentDidMount() {
    const { addProjectId, match, projects } = this.props;
    const projectId = parseInt(match.params.projectId, 10);

    this.setState({
      project: projects.find(el => el.id === projectId)
    });
    addProjectId(projectId);
  }

  render() {
    const { classes } = this.props;
    const { project } = this.state;

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
