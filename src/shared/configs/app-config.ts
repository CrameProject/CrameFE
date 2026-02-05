const DEFAULT_CONFIG = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'localhost:5173',
  },
};

export const appConfig = {
  ...DEFAULT_CONFIG,
};