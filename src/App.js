import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigation';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

export default App;
