import { atom } from "recoil";

type LoginStateAtomType = {
  isLogin: boolean;
  name: null | string;
};

export const LoginStateAtom = atom<LoginStateAtomType>({
  key: "LoginStateAtom",
  default: {
    isLogin: false,
    name: null,
  },
});
