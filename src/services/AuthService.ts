import { StorageService } from '@services';

class AuthService {
  authToken: string;
  userId?: number;

  constructor() {
    this.authToken = '';
  }

  hasAuth() {
    return !!this.authToken;
  }

  setAuthToken(token: string) {
    this.authToken = token;
    StorageService.setItemAsync('authToken', token);
  }

  getAuthHeader() {
    return {
      ...(!!this.authToken && {
        Authorization: `bearer ${this.authToken}`,
      }),
    };
  }

  removeAuthToken() {
    this.authToken = '';
    StorageService.deleteItemAsync('authToken');
  }

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId() {
    return this.userId;
  }

  removeUserId() {
    this.userId = undefined;
  }
}

export default new AuthService();
