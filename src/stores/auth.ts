import { atom, useSetRecoilState } from 'recoil';
import { AuthService, StorageService } from '@services';
import { UserDTO } from '@types';

export const authStore = atom<UserDTO | null>({
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
    AuthService.setUserId(1234);
  };

  return { boostAuth };
};

export const useAuthActions = () => {
  const setAuthUser = useSetRecoilState(authStore);

  const login = async ({ phone }: { phone: string }) => {
    // API: login 성공시

    AuthService.setAuthToken(phone);
    setAuthUser({
      id: 0,
      name: '테스트',
      type: '관리자',
      certified: true,
      phone: phone,
      createdDateTime: '',
      updatedDateTime: '',
    });
  };

  const logout = async () => {
    AuthService.removeAuthToken();
    AuthService.removeUserId();
    setAuthUser(null);
  };

  return { login, logout };
};
