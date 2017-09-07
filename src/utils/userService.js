import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
  .then(token => tokenService.setToken(token));
}

function login(creds) {
  return userAPI.login(creds) 
  .then(token => tokenService.setToken(token));
}

function logout() {
  tokenService.removeToken();
}

function getUser() {
  return tokenService.getUserFromToken();
}

export default {
  signup,
  getUser,
  logout,
  login
};