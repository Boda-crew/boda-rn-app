import { AuthService, StorageService } from '@services';
import { User } from '@types';
import { atom, useSetRecoilState } from 'recoil';

export const authStore = atom<User | null>({
  key: 'authStore',
  default: null,
});

export const useBootAuth = () => {
  const setAuthUser = useSetRecoilState(authStore);

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
  const setAuthUser = useSetRecoilState(authStore);

  const login = async ({ id }: { id: string; pw: string }) => {
    const token = ''; // API: login
    AuthService.setAuthToken(token);
    setAuthUser({ id, name: '테스트' });
  };

  const logout = async () => {
    AuthService.removeAuthToken();
    setAuthUser(null);
  };

  return { login, logout };
};
