export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});
// this is the exact same string(set_current-user) that the user.reducer is expecting because I have to remember to always align the action creators type with the reducer type to make appropriate effects. Because these strings should never change, Make sure its always capital and snake case.