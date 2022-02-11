import { AuthService, StorageService } from '@services';
import { User } from '@types';
import { atom, useSetRecoilState } from 'recoil';

export const authUser = atom<User | null>({
  key: 'authUser',
  default: null,
});

export const useBootAuth = () => {
  const setAuthUser = useSetRecoilState(authUser);

  const boostAuth = async () => {
    const token = await StorageService.getItemAsync('authToken');
    if (!token) return;

    AuthService.setAuthToken(token);
    // API: get whoami
    setAuthUser(null);
  };

  return { boostAuth };
};

export const useAuthActions = () => {
  const setAuthUser = useSetRecoilState(authUser);

  const login = async () => {
    const token = ''; // API: login
    AuthService.setAuthToken(token);
    setAuthUser(null);
  };

  const logout = async () => {
    AuthService.removeAuthToken();
    setAuthUser(null);
  };

  return { login, logout };
};
