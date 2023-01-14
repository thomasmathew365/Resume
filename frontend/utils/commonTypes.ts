import { Dispatch, SetStateAction } from 'react';

export interface NavFunctionTypes {
    setMenuOpen: () => void;
    setSelectMenuItem: Dispatch<SetStateAction<string>>;
  }

export interface HomeProps extends NavFunctionTypes {
    wallData: any;
    postData: any;
    menuOpen: boolean;
    selectMenuItem: string;
}
