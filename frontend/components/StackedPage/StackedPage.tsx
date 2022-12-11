import classNames from 'classnames';
import React, { useCallback } from 'react';

import { NavigationContext } from '../../lib/navigationContext';
import { NavFunctionTypes } from '../../pages/_app';
import style from './StackedPage.module.scss';

interface StackedPageProps extends NavFunctionTypes {
  children: React.ReactNode;
  name: string;
  pageIndex: string;
  pageIndexState: string;
  styleIndex: number;
}

// style="transform: translate3d(0px, 75%, -300px); z-index: 0; opacity: 0.8;background: pink;"

const inactiveStyles = [
  {
    transform: "translate3d(0px, 75%, -280px)",
    zIndex: 0,
    opacity: 0.9,
  },
  {
    transform: "translate3d(0px, 75%, -360px)",
    zIndex: -1,
    opacity: 0.7,
  },
];

export default function StackedPage({
  name,
  children,
  pageIndex,
  pageIndexState,
  styleIndex,
  setSelectMenuItem,
  setSelectedMenuGroup,
  setMenuOpen,
}: StackedPageProps) {
  const setMenuState = useCallback(
    (groupIndex: number) => (itemName: string) => {
      setSelectedMenuGroup(groupIndex);
      setSelectMenuItem(itemName);
      setMenuOpen();
      return undefined; //to appease onclick return type
    },
    [setSelectedMenuGroup, setSelectMenuItem, setMenuOpen]
  );

  return (
    <NavigationContext.Consumer>
      {({ menuOpen }) => {
        const isInactive = pageIndex === pageIndexState;
        return (
          <div
            style={inactiveStyles[styleIndex]}
            className={classNames(
              style["page"],
              menuOpen ? style["opened"] : "",
              isInactive ? style["active"] : style["inactive"]
            )}
            onClick={() => setMenuState(Number(pageIndex.slice(0, 1)))(name)}
          >
            <div className={classNames(style["page-title"])}>{name}</div>
            {children}
          </div>
        );
      }}
    </NavigationContext.Consumer>
  );
}
