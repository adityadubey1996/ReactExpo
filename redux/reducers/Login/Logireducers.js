import NavigationService from '../../../services/NavigationService'
export const LoginReducer = (state = {}, action) => {
  let payload = action.Response
  switch (action.type) {
    case 'LOGIN_USER_SUCCESFUL':
      NavigationService.navigate('BottomTabs')

      return { ...state, payload }

    case 'LOGIN_USER_ERROR':
      return { ...state, payload }

    case 'LOGIN_USER_ERROR_BEFORE':
      return { ...state, payload }
    default:
      return state
  }
}
