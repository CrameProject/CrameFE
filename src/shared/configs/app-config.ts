const DEFAULT_CONFIG = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.crame.site'
  },
};

export const appConfig = {
  ...DEFAULT_CONFIG,
};