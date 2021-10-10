export let authToken = '';

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const getAuthHeader = () => {
  return {
    ...(authToken && {
      Authorization: authToken,
    }),
  };
};

export const getConfig = (body: any, isFormData?: boolean) => ({
  body: isFormData ? body : JSON.stringify(body),
  headers: {
    ...getAuthHeader(),
    Accept: 'application/json',
    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
  },
});
