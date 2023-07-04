export const signupSuccess = (user) => {
  return {
    type: "SIGNUP_SUCCESS",
    payload: user,
  };
};
