import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens';
import React from 'react';
import router from './router';

const CommonStack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={router.GET_START_SCREEN}
        component={common[router.GET_START_SCREEN]}
      />
      <CommonStack.Screen
        name={router.ON_BOARDING_SCREEN}
        component={common[router.ON_BOARDING_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonContainer;
