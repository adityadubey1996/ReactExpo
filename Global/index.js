let ProjectSettings = {}

console.log('process.env.ENV', process.env.ENV)

console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL)
// console.log("process.env.NODE_ENV", process.env.staging.NODE_ENV);

ProjectSettings = {
  //   baseURL: 'https://auth-mern-stack-test.herokuapp.com',

  baseURL: 'http://localhost:5000',
}

export default ProjectSettings
