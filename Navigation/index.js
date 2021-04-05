import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import SplashScreen from '../Screen/SplashScreen'
import Auth from './Auth'
import EmailStateFalse from '../Screen/DrawerScreens/EmailStateFalse'
import BottomTabs from './BottomNavigatorStack'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// const InitialStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="SplashScreen">
//       <Stack.Screen
//         name="SplashScreen"
//         component={SplashScreen}
//         // Hiding header for Splash Screen
//         options={{ headerShown: false }}
//       />
//       {/* Auth Navigator: Include Login and Signup */}
//       <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
//       {/* Navigation Drawer as a landing page */}
//       <Stack.Screen
//         name="EmailStateFalse"
//         component={EmailStateFalse}
//         // Hiding header for Navigation Drawer
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="BottomTabs"
//         component={BottomTabs}
//         // Hiding header for Navigation Drawer
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   )
// }
// export default InitialStack
const AppNavigator = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    EmailStateFalse: EmailStateFalse,
    BottomTabs: BottomTabs,
    Auth: Auth,
  },
  {
    initialRouteName: 'SplashScreen',
  }
)

export default createAppContainer(AppNavigator)
