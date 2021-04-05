import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Screen/DrawerScreens/ProfileScreen'
import ButtonScreen from '../Screen/DrawerScreens/ButtonScreen'
import ImageUploadScreen from '../Screen/ImageUploadScreen'
import ListViewScreen from '../Screen/ListViewScreen'
const Stack = createStackNavigator()

const ProfileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
      <Stack.Screen name="ImageUploadScreen" component={ImageUploadScreen} />
      <Stack.Screen name="ListViewScreen" component={ListViewScreen} />
    </Stack.Navigator>
  )
}

export default ProfileScreenStack
