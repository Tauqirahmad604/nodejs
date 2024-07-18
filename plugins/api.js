export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const baseURL =
    config.public.apiBase || "https://binge-dev.jigsawme.io/api/v1";

  return {
    provide: {
      apiFetch: (endpoint, options = {}) => {
        return useFetch(endpoint, {
          baseURL,
          ...options,
        });
      },
    },
  };
});
