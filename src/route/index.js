import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';
import FlashMessage from "react-native-flash-message";

const index = () => {
  return (
        <NavigationContainer>
          <Navigation />
          <FlashMessage position="top" />
        </NavigationContainer>
  );
};

export default index;