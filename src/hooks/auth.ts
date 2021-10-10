import { User } from '@types';
import { LocalStorage } from '@utils';
import { atom, useSetRecoilState } from 'recoil';

export const authToken = atom<string | null>({
  key: 'authToken',
  default: null,
});

export const authUser = atom<User | null>({
  key: 'authUser',
  default: null,
});

export const useAuthActions = () => {
  const setAuthToken = useSetRecoilState(authToken);
  const setAuthUser = useSetRecoilState(authUser);

  const boostAuth = async () => {
    const token = await LocalStorage.getItemAsync('authToken');
    if (!token) return;

    // API: get whoami
    // setAuthUser()
    setAuthToken(token);
  };

  const login = async () => {
    const token = ''; // API: login
    setAuthToken(token);
    setAuthUser(null);
    LocalStorage.setItemAsync('authToken', token);
  };

  const logout = async () => {
    setAuthToken(null);
    setAuthUser(null);
    LocalStorage.deleteItemAsync('authToken');
  };

  return { boostAuth, login, logout };
};
