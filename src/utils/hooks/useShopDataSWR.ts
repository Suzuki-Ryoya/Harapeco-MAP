import useSWR from 'swr';
import { fetcher } from '../fetcher';

export const useShopDataSWR = (userSetKeyword: string, fallbackData: any) => {
  return useSWR(`api/gourmet/${userSetKeyword}`, fetcher, {
    fallbackData,
    refreshInterval: 30000,
  });
};
