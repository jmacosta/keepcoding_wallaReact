import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader
} from '../../api/client';
import storage from '../../utils/storage';
export const login = userLoginInfo => {
  const { rememberMe } = userLoginInfo;
  return client
    .post('/api/auth/login', userLoginInfo)
    .then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);
      // to do manage the state for if persisted
      if (rememberMe) {
        storage.set('auth', accessToken);
      }
    });
};
export const logout = () => {
  return Promise()
    .resolve()
    .then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
    });
};
