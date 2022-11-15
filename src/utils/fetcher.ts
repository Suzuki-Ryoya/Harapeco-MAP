// TODO: Promiseの型をレスポンスエラーの型に変更する
const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url, { mode: 'cors' });
  return (await response.json()) as any;
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
