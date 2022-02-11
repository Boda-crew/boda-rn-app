import { StorageService } from '@services';

class AuthService {
  authToken: string;

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
}

export default new AuthService();
