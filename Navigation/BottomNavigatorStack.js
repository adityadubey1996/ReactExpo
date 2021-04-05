import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DrawerNavigatorRoutes from './DrawerNavigatorRoutes'
import ProfileScreenStack from './ProfileScreenStack'
const Tab = createBottomTabNavigator()

const BottomTabs = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DrawerNavigatorRoutes} />
      <Tab.Screen name="Settings" component={ProfileScreenStack} />
    </Tab.Navigator>
  )
}
export default BottomTabs
