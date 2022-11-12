export const currentFetcher = () => {
  return new Promise(
    (res: (value?: Position) => void, rej: (reson?: PositionError) => void) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    },
  );
};

export const geoFetcher = () => {
  return new Promise((res, rej) => {
    const onSuccess = async (position: any) => {
      const latitude = String(position?.coords?.latitude);
      const longitude = String(position?.coords?.longitude);
      const result = await fetch(
        `${env.API_URL_ROOT}&lat=${encodeURI(latitude)}&lng=${encodeURI(
          longitude,
        )}`,
      );
      const data = await result.json();
      resolve(data);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, rej);
  });
};
