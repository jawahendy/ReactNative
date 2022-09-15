// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import store from './reducers/store';


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;