import { ShopListResponseType } from '@/types/shop';

// TODO: Promiseの型をレスポンスエラーの型に変更する
const fetcher = async (url: string): Promise<ShopListResponseType> => {
  const response = await fetch(url);
  return (await response.json()) as ShopListResponseType;
};

export default fetcher;

export const poster = async (url: string, data: any): Promise<any> => {
  const response = await fetch(url, {
    // 送信先URL
    method: 'post', // 通信メソッド
    headers: {
      'Content-Type': 'application/json', // JSON形式のデータのヘッダー
    },
    body: JSON.stringify(data), // JSON形式のデータ
  });
  return (await response.json()) as any;
};
