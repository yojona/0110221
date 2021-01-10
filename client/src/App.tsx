import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Appbar from './components/Appbar';
import store from './store';
import AppIcon from '@material-ui/icons/DriveEta';
import Layout from './components/Layout';

const App: FC = () => (
  <Provider store={store}>
    <Layout>
      <Appbar icon={<AppIcon />} title="Vehículos" />
    </Layout>
  </Provider>
);

export default App;
