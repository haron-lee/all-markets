import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const loginType = atom({
  key: 'loginType',
  default: 'BUYER',
  effects_UNSTABLE: [persistAtom],
});

export default loginType;
