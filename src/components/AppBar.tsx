import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <EmojiEmotionsIcon />
          </IconButton>
          <Grid container justifyContent='space-around'>
            <Grid item xs={2}>
              <Typography variant='h6' color='inherit'>
                <Link to='/'>Home</Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h6' color='inherit'>
                <Link to='/lineplot'>LinePlot</Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h6' color='inherit'>
                <Link to='/pieplot'>PiePlot</Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h6' color='inherit'>
                <Link to='/barplot'>BarPlot</Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h6' color='inherit'>
                <Link to='/radarplot'>RadarPlot</Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h6' color='inherit'>
                <Link to='/bubbleplot'>BubblePlot</Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
