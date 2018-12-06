// @flow
import React, { Component } from 'react';
import css from './Editor.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import history from '../../../helpers/history';
import routes from '../../../constants/routes.json';

type Props = {};

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
    const { classes } = this.props;
    const project = this.props.projects.find(
      el => el.id === parseInt(this.props.match.params.projectId, 10)
    );
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <button
              className={css.mainButton}
              onClick={() => history.push(routes.HOME)}
            >{`< Go back`}</button>
            <h3>Edit - {project.name}</h3>
            <button
              className={css.mainButton}
              onClick={() => {
                history.push(`/send/${project.id}`);
              }}
            >
              {`Go to sending interface >`}
            </button>
          </div>

          <div className={css.interfaceContainer}>
            <div className={css.previsualisationContainer}>
              <div className={css.previsualisation} />
            </div>
            <div className={css.toolsContainer}>
              <div className={css.selector} />
              <div className={css.contacts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Editor);
