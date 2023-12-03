import { client, setAuthorizationHeader } from '../../api/client';
export const login = userLoginInfo => {
  return client
    .post('/api/auth/login', userLoginInfo)
    .then(({ accesToken }) => setAuthorizationHeader(accesToken));
};
