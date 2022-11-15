// TODO: Promiseの型をレスポンスエラーの型に変更する
const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url, { mode: 'cors' });
  return (await response.json()) as any;
};

export default fetcher;
  return (await response.json()) as any;
};
