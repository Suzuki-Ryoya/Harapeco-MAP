import { ShopListResponseType } from '@/types/shop';

// TODO: Promiseの型をレスポンスエラーの型に変更する
const fetcher = async (url: string): Promise<ShopListResponseType> => {
  const response = await fetch(url);
  return (await response.json()) as ShopListResponseType;
};

export default fetcher;
