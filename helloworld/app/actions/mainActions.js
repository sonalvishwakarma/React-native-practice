import * as types from './actionTypes';

export function login() {
  return {
    type: types.LOGIN
  };
}

export function signUp() {
  return {
    type: types.SIGNUP
  };
}
