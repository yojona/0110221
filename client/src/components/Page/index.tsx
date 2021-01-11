
import { makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(1),
  },
}))

const Page: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
};

export default Page;
