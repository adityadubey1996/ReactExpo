export const LoginActions = (email, password) => {
  return {
    type: 'LOGIN',
    email,
    password,
  };
};

export const LogoutAction = () => {
  return {
    type: 'LOGOUT',
  };
};
