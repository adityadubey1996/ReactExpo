import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './DrawerNavigationRoutes';
import EmailStateFalse from './DrawerScreens/EmailStateFalse';
const Stack = createStackNavigator();

const AuthEmail = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmailFalseScreen"
        component={EmailStateFalse}></Stack.Screen>
      <Stack.Screen name="BottomTabs" component={BottomTabs}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthEmail;
