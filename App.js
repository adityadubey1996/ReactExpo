/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationService from './services/NavigationService'
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import SplashScreen from './Screen/SplashScreen'
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import BottomTabs from './Screen/DrawerNavigationRoutes'
import EmailStateFalse from './Screen/DrawerScreens/EmailStateFalse'
// import BottomNavigatorRoutes from './Screen/DrawerNavigationRoutes';
import AuthEmail from './Screen/AuthEmailRoutes'
import { Provider } from 'react-redux'
import configureStore from './redux/reducers/store'
import AppNavigator from './Navigation'
const store = configureStore()
const Stack = createStackNavigator()
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
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

function App() {
  const navigatorRef = React.createRef()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </NavigationContainer>
    </Provider>
  )
}

export default App
{
  /* <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EmailStateFalse"
            component={EmailStateFalse}
            // Hiding header for Navigation Drawer
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            // Hiding header for Navigation Drawer
            options={{headerShown: false}}
          />
        </Stack.Navigator> */
}
