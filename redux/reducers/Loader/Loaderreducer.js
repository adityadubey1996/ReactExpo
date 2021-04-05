export const Loaderreducer = (state = false, action) => {
  console.log('Loaderreducer -> action', action)
  switch (action.type) {
    case 'LOADER_SHOW':
      return (state = true)
    case 'LOADER_HIDE':
      return (state = false)

    default:
      return state
  }
}
