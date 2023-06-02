const PRODUCT_URL = 'https://openmarket.weniv.co.kr/products';

const getProducts = async (page) => {
  try {
    const data = await fetch(`${PRODUCT_URL}?page=${page}`);
    if (!data.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }
    const productsData = await data.json();
    return productsData;
  } catch (error) {
    console.error('에러가 발생했습니다', error);
  }
};

export default getProducts;
