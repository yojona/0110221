
import { makeStyles, Theme } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      ...theme.typography.body1,
      margin: 0,
      background: theme.palette.background.default,
    },
  }
}));

const Layout: FC = ({ children }) => {
  useStyles();
  return <div>{children}</div>
};

export default Layout;
