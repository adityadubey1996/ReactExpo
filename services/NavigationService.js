import React from 'react'
import { NavigationActions } from 'react-navigation'
let navigator
export const navigationRef = React.createRef()
export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef
}

export const navigate = (routeName, params) => {
  console.log('navigate -> routeName', routeName)
  console.log('navigator', navigator)
  // navigationRef.current.navigate(routeName)
  if (navigator && routeName) {
    console.log('navigate -> routeName inside', routeName)

    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    )
  }
}

export default {
  navigate,
  setTopLevelNavigator,
}
