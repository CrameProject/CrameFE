import axios from 'axios';
import { appConfig } from '@/shared/configs/app-config';

export const api = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});