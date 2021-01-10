import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App: FC = () => (
  <Provider store={store}>
    <div>Home</div>
  </Provider>
);

export default App;
