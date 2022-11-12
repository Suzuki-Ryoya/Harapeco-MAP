export const currentFetcher = () => {
  return new Promise(
    (res: (value?: Position) => void, rej: (reson?: PositionError) => void) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    },
  );
};
