// 店舗オブジェクト
interface Shop {
  id: string;
  name: string;
  access: string;
  thumbnail: string;
}

// 店舗詳細オブジェクト
interface ShopDetail {
  text: string;
  address: string;
  Hours: Date;
  Image: string;
}

//店舗一覧表示オブジェクト
interface ShopListResponse {
  shops: Shop[];
}
