import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { API, AuthService, StorageService } from '@services';
import { UserDTO } from '@types';


export const authStore = atom<UserDTO | null>({
  key: 'authStore',
  default: null,
});

export const useBootAuth = () => {
  const { login, logout } = useAuthActions();

  const boostAuth = async () => {
    const token = await StorageService.getItemAsync('authToken');
    if (!token) return;

    try {
      login({ phone: token });
    } catch (e) {
      logout();
    }
  };

  return { boostAuth };
};

export const useAuthActions = () => {
  const setAuthUser = useSetRecoilState(authStore);

  const login = async ({ phone }: { phone: string }) => {
    const { data: user } = await API.login_user({ phone });

    AuthService.setAuthToken(phone);
    AuthService.setUserId(user.id);
    setAuthUser(user);
  };

  const logout = async () => {
    AuthService.removeAuthToken();
    AuthService.removeUserId();
    setAuthUser(null);
  };

  return { login, logout };
};

export const useAuth = () => {
  const auth = useRecoilValue(authStore);
  return { auth };
};
