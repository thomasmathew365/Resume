import '../styles/globals.css';

import Head from 'next/head';
import { Dispatch, SetStateAction, useState } from 'react';

import Navbar from '../components/Navbar';
import { NavigationContext } from '../lib/navigationContext';

import type { AppProps } from 'next/app';
export interface NavFunctionTypes {
  setMenuOpen: () => void;
  setSelectedMenuGroup: Dispatch<SetStateAction<number>>;
  setSelectMenuItem: Dispatch<SetStateAction<string>>;
}

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedMenuGroup, setSelectedMenuGroup] = useState<number>(0);
  const [selectMenuItem, setSelectMenuItem] = useState<string>('HOME');

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavigationContext.Provider
        value={{ menuOpen, selectedMenuGroup, selectMenuItem }}
      >
        <Navbar setMenuOpen={() => setMenuOpen(!menuOpen)} setSelectedMenuGroup={setSelectedMenuGroup}
          setSelectMenuItem={setSelectMenuItem} />
        <Component
          {...pageProps}
          setMenuOpen={setMenuOpen}
          setSelectedMenuGroup={setSelectedMenuGroup}
          setSelectMenuItem={setSelectMenuItem}
          selectedMenuGroup={selectedMenuGroup}
          selectMenuItem={selectMenuItem}
          menuOpen={menuOpen}
        />
      </NavigationContext.Provider>
    </>
  );
}
