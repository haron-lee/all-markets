const LOGOUT_URL = 'https://openmarket.weniv.co.kr/accounts/logout/';

const logoutAPI = async () => {
  try {
    const response = await fetch(LOGOUT_URL);

    const logoutData = await response.json();

    if (response.ok) {
      return logoutData;
    } else {
      throw new Error('로그아웃 기능에 에러가 있습니다.');
    }
  } catch (error) {
    console.error('Logout API 에러가 발생했습니다', error);
    throw error;
  }
};

export default logoutAPI;
