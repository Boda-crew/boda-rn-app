import { API_ENDPOINT } from '@env';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import AuthService from './AuthService';

/**
 * axios 인스턴스 설정
 */

const instance: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 10000, // 10초
});

instance.interceptors.request.use(
  config => ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...AuthService.getAuthHeader(),
      ...config.headers,
    },
  }),
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  res => {
    console.log(`[Fetch ${res.status}] ${res.config.url}`);
    if (res.config.method !== 'get') console.log(res.data);

    return res;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        AuthService.removeAuthToken();

        return Promise.reject('잘못된 인증입니다.');
      }
    }

    console.log(`[ Error ] ${error.message}`, error.config); // 디버깅용 콘솔
    return Promise.reject(error.response.data);
  },
);

/**
 * axios 통신 코드
 */

type APIResponse<T> = Promise<{
  data: T;
  message?: string;
}>;

export const _axios = <T>(props: AxiosRequestConfig): APIResponse<T> => {
  return instance(props);
};
