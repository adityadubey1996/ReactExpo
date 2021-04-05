import React from 'react'

import SettingsScreen from '../Screen/DrawerScreens/SettingsScreen'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationDrawerHeader from '../Screen/Components/NavigationDrawerHeader'

const Stack = createStackNavigator()

const settingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  )
}

export default settingScreenStack
