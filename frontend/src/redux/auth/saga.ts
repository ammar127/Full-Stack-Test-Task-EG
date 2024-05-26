/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// src/features/auth/authSaga.ts
import axios from 'axios';
import { AxiosResponse } from 'axios'; // Import AxiosResponse type
import toast from 'react-hot-toast';
import { call, put, takeLatest } from 'redux-saga/effects';

import { API_URL } from '../../constants';
import { LoginDTO, RegisterDTO, User } from '../../types';

import { loginFailure,loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from './slice';
interface LoginAction {
  type: string;
  payload: LoginDTO
}

function* loginApi(credentials: LoginDTO): Generator<any, any, AxiosResponse> { // Add return type annotation
  const response: AxiosResponse<any> = yield axios.post(API_URL + '/api/login', credentials); // Add type annotation to response variable
  return response.data;
}

function* handleLogin(action: LoginAction) {
  try {
    const user: User = yield call(loginApi, action.payload);
    yield put(loginSuccess(user));
    toast.success('Successfully logged in!')
  } catch (error: any) {
    const message: string = error?.response?.data?.message;
    yield put(loginFailure(message));
    toast.error(message)
  }
}

interface RegisterAction {
  type: string;
  payload: RegisterDTO;
}

function* registerApi(credentials: RegisterDTO): Generator<any, any, AxiosResponse> {
  const response: AxiosResponse<any> = yield axios.post(API_URL + '/api/signup', credentials);
  return response.data;
}

function* handleRegister(action: RegisterAction) {
  try {
    const user: User = yield call(registerApi, action.payload);
    yield put(registerSuccess(user));
    toast.success('Successfully registered!')
  } catch (error: any) {
    const message: string = error?.response?.data?.message;
    toast.error(message)
    yield put(registerFailure(message));
  }
}

export function* watchAuth() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
}

const authSagas = watchAuth;

export default authSagas;