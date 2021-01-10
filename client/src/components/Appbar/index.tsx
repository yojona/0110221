import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';

type AppbarProps = {
  icon: ReactNode;
  title: string;
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 8
  },
})

const Appbar: FC<AppbarProps> = ({ icon, title }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className={classes.container}>
          <span className={classes.icon}>{icon}</span>
          <Typography variant="h6">{title}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default Appbar;
