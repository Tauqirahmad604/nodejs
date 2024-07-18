export const useAuth = () => {
  // , {
  //   maxAge: 60 * 60 * 24 * 7,
  //   secure: process.env.NODE_ENV === 'production',
  //   sameSite: 'strict'
  // }
  const accessToken = useCookie("accessToken");

  const setAuthHeader = (config) => {
    if (accessToken.value) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken.value}`,
      };
    }
    return config;
  };

  const setToken = (token) => {
    accessToken.value = token;
  };

  const clearToken = () => {
    accessToken.value = null;
  };

  return {
    accessToken,
    setAuthHeader,
    setToken,
    clearToken,
  };
};
