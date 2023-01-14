import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
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

const variants = {
  active: {
    transform: "translate3d(0px, 0px, 0px)",
    zIndex: 1,
    opacity: 1
  },
  inactive0: { transform: "translate3d(0px, 75%, -200px)" },
  inactive1: {
    transform: "translate3d(0px, 75%, -240px)",
    zIndex: 0,
    opacity: 0.9
  },
  inactive2: {
    transform: "translate3d(0px, 75%, -280px)",
    zIndex: -1,
    opacity: 0.7
  },
  inactive3: {
    transform: "translate3d(0px, 75%, -320px)",
    zIndex: -2,
    opacity: 0.6
  },
  inactive4: {
    transform: "translate3d(0px, 75%, -360px)",
    zIndex: -3,
    opacity: 0.5
  },
  inactive5: {
    transform: "translate3d(0px, 75%, -400px)",
    zIndex: -4,
    opacity: 0.5
  },
  hidden1: {
    transform: "translate3d(0px, 0px, 0px)",
    zIndex: 0,
    opacity: 0.9
  },
  hidden2: {
    transform: "translate3d(0px, 0px, 0px)",
    zIndex: -1,
    opacity: 0.7
  },
  hidden3: {
    transform: "translate3d(0px, 0px, 0px)",
    zIndex: -2,
    opacity: 0.6
  },
  hidden4: {
    transform: "translate3d(0px, 0px, 0px)",
    zIndex: -3,
    opacity: 0.5
  },
  hidden5: {
    transform: "translate3d(0px, 0px, 0px)",
    zIndex: -4,
    opacity: 0.5
  },

}

export default function StackedPage({
  name,
  children,
  pageIndex,
  pageIndexState,
  styleIndex,
  setSelectMenuItem,
  setMenuOpen,
}: StackedPageProps) {
  const router = useRouter()

  const setMenuState = useCallback(
    (itemName: string) => {
      setSelectMenuItem(itemName);
      // router.push(`/${itemName.toLocaleLowerCase()}`);
      setMenuOpen();
      return undefined; //to appease onclick return type
    },
    [setSelectMenuItem, setMenuOpen]
  );

  return (
    <NavigationContext.Consumer>
      {({ menuOpen }) => {
        const isActive = pageIndex === pageIndexState;
        return (
          <motion.div
            className={classNames(
              style["page"],
              isActive ? style["active"] : style["inactive"]
            )}
            animate={menuOpen ? `inactive${styleIndex}` : isActive ? "active" : `hidden${styleIndex}`}
            variants={variants}
            onClick={() => menuOpen && setMenuState(name)}
          >
            <div className={classNames(style["page-title"], !menuOpen && style["active"])}>{name}</div>
            {children}
          </motion.div>
        );
      }}
    </NavigationContext.Consumer >
  );
}
