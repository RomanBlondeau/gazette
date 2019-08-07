import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Redirect } from 'react-router';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button';

import css from './MailCard.scss';

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
    fontSize: '12px',
    marginTop: 10
  },
  update: {
    color: '#43425D',
    fontSize: '12px'
  },
  button: {
    borderRadius: 17,
    margin: 15,
    padding: 0,
    minWidth: 32,
    float: 'right'
  }
};

type Props = {
  classes: object,
  project: array,
  onDelete: func
};

class mailCard extends React.Component {
  props: Props;

  state = {
    redirect: false,
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, project, onDelete } = this.props;
    const { redirect, open } = this.state;
    return (
      <Card className={classes.card}>
        {redirect === true && <Redirect to={`/edit/${project.id}`} />}
        <CardActionArea>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="small"
            onClick={() => this.handleClickOpen()}
          >
            <DeleteIcon className={css.icon} />
          </Button>
          <CardContent
            className={css.cardContent}
            onClick={() => this.setState({ redirect: true })}
          >
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
              {`Creation date : ${new Date(project.creation)
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, '/')}`}
            </Typography>
            <Typography
              gutterBottom
              component="span"
              className={classes.update}
            >
              {`Last update : ${new Date(project.update)
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, '/')}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Êtes-vous sûr de vouloir supprimer le projet ${project.name} ?`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Cette opération est irréversible.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autofocus>
              Annuler
            </Button>
            <Button
              onClick={() => {
                onDelete(project.id);
                this.handleClose();
              }}
              color="secondary"
            >
              Supprimer
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    );
  }
}

export default withStyles(styles)(mailCard);
