import { atom, useSetRecoilState } from 'recoil';
import { AuthService, StorageService } from '@services';
import { UserDTO } from '@types';

const fakeUser: UserDTO = {
  id: 2,
  name: '테스트',
  type: '관리자',
  certified: true,
  phone: '010-1234-1234',
  createdDateTime: '',
  updatedDateTime: '',
};

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
    AuthService.setUserId(2);
    setAuthUser(fakeUser);
  };

  return { boostAuth };
};

export const useAuthActions = () => {
  const setAuthUser = useSetRecoilState(authStore);

  const login = async ({ phone }: { phone: string }) => {
    // API: login 성공시
    const userId = 2;

    AuthService.setAuthToken(phone);
    AuthService.setUserId(userId);

    setAuthUser(fakeUser);
  };

  const logout = async () => {
    AuthService.removeAuthToken();
    AuthService.removeUserId();
    setAuthUser(null);
  };

  return { login, logout };
};
