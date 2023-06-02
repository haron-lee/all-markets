const ACCOUNT_URL = 'https://openmarket.weniv.co.kr/accounts/login/';

const loginAPI = async (userInput) => {
  try {
    const response = await fetch(ACCOUNT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userInput }),
    });

    const accountData = await response.json();

    if (response.ok) {
      return accountData;
    } else {
      throw new Error('아이디 혹은 비밀번호가 일치하지 않습니다.');
    }
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
    throw error;
  }
};

export default loginAPI;
