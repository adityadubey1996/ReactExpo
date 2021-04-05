import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomSidebarMenu from '../Screen/Components/CustomSidebarMenu'
import homeScreenStack from './homeScreenStack'
import settingScreenStack from './settingScreenStack'
const Drawer = createDrawerNavigator()

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen name="homeScreenStack" options={{ drawerLabel: 'Home Screen' }} component={homeScreenStack} />
      <Drawer.Screen name="settingScreenStack" options={{ drawerLabel: 'Setting Screen' }} component={settingScreenStack} />
    </Drawer.Navigator>
  )
}
export default DrawerNavigatorRoutes
