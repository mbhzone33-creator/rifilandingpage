export interface IGurProduct {
  id: string;
  name: string;
  price: number;
  unit: string;
  imgUrl: string;
}

export const gurProducts: IGurProduct[] = [
  {
    id: 'REPLACE_WITH_PATALI_PRODUCT_ID',
    name: 'পাটালি গুড়',
    price: 850,
    unit: 'কেজি',
    imgUrl: '/images/patali gur.jpeg',
  },
  {
    id: 'REPLACE_WITH_LALI_PRODUCT_ID',
    name: 'লালি গুড়',
    price: 850,
    unit: 'কেজি',
    imgUrl: '/images/nali gur.jpeg',
  },
  {
    id: 'REPLACE_WITH_DANADAR_PRODUCT_ID',
    name: 'দানাদার গুড়',
    price: 850,
    unit: 'কেজি',
    imgUrl: '/images/danadar gur.jpeg',
  },
  {
    id: 'REPLACE_WITH_FOYEL_PRODUCT_ID',
    name: 'ফয়েল পাটালি',
    price: 850,
    unit: 'কেজি',
    imgUrl: '/images/foyal-patali gur.jpeg',
  },

  {
    id: 'REPLACE_WITH_3KG_CARTON_ID',
    name: '৩ কেজি কার্টন',
    price: 1990,
    unit: 'প্যাকেজ',
    imgUrl: '/images/patali gur.jpeg',
  },
];
