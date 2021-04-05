import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screen/DrawerScreens/HomeScreen'
import NavigationDrawerHeader from '../Screen/Components/NavigationDrawerHeader'

const Stack = createStackNavigator()

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default homeScreenStack
