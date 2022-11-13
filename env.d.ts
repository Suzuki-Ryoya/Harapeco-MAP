declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // グルメサーチ用のkey
      API_KEY: string;

      // グルメサーチ用のURL
      API_URL_ROOT: string;

      //Public用のURLRoot
      NEXT_PUBLIC_API_URL_ROOT: string;
    }
  }
}

export {};
