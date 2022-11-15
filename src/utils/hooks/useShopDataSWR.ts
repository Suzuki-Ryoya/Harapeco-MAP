import useSWR from 'swr';
import fetcher, { poster } from '../fetcher';

//TODO: fallbackDataの型をanyからレスポンスの型に変更する
export const useShopDataSWR = (userSetKeyword: string, fallbackData: any) => {
  return useSWR(`api/groumet/${userSetKeyword}`, fetcher, {
    fallbackData,
    refreshInterval: 30000,
  });
};

export const useShopListSWR = async (data: any) => {
  // return useSWR(`api/search`, (url) => poster(url, { url: data }));
  return await poster(`api/search`, { url: data });
};

export const useShopListsSWR = () => {
  return useSWR(`api/search`, fetcher);
};
