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

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: 'cover'
  }
};

function mailCard(props) {
  const { classes, project } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Accéder au projet
        </Button>
      </CardActions>
    </Card>
  );
}

mailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

export default withStyles(styles)(mailCard);
