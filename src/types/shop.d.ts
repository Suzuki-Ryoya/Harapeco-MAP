//APIの店舗仕様

// 店舗オブジェクト
interface Shop {
  id: string;
  name: string;
  access: string;
  photo: {
    pc: Photo_PC;
  };
  address: string;
  open: string;
  station_name: string;
  genre: Genre;
  close: string;
}

// サムネイル画像のPC版オブジェクト
interface Photo_PC {
  l: string;
  m: string;
  s: string;
}

interface Photo_Moblile {
  l: string;
  s: string;
}

interface Genre {
  name: string;
}

//店舗一覧表示オブジェクト
export interface ShopListResponseType {
  results: {
    shop: Shop[];
  };
}
