/* eslint-disable react/forbid-prop-types */
import React from 'react';
import css from './MailCard.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import history from '../../../../helpers/history';
import routes from '../../../../constants/routes';

const styles = {
  card: {
    maxWidth: 345,
    margin: 15
  },
  media: {
    objectFit: 'cover'
  },
  creation: {
    color: '#43425D',
    textAlign: 'right',
    fontSize: '12px'
  }
};

function mailCard(props) {
  const { classes, project } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => history.push(`${routes.EDIT}/${project.id}`)}
      >
        <CardContent className={css.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={css.colorHover}
          >
            {project.name}
          </Typography>
          <Typography component="p" className={css.colorHover}>
            {project.description}
          </Typography>
          <Typography
            gutterBottom
            component="span"
            className={classes.creation}
          >
            {new Date(project.creation)
              .toJSON()
              .slice(0, 10)
              .replace(/-/g, '/')}
          </Typography>
          <Typography gutterBottom component="span" className={classes.update}>
            {new Date(project.update)
              .toJSON()
              .slice(0, 10)
              .replace(/-/g, '/')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

mailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export default withStyles(styles)(mailCard);
