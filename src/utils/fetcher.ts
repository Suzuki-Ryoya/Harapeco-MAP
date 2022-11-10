// TODO: Promiseの型をレスポンスエラーの型に変更する
export const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url);
  return (await response.json()) as any;
};
