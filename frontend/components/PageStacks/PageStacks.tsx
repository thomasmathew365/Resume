import React, { ReactElement, useMemo } from 'react';

import { NavFunctionTypes } from '../../pages/_app';
import StackedPage from '../StackedPage';

interface pageListType {
  name: string;
  component: ReactElement;
}

interface PageStacksProps extends NavFunctionTypes {
  pageList: pageListType[];
  pageIndexState: string;
  menuOpen: boolean;
}

export default function PageStacks({
  pageList,
  pageIndexState,
  menuOpen,
  setSelectMenuItem,
  setMenuOpen
}: PageStacksProps) {
  const sortedPageList = useMemo(
    () => 
      pageList.sort((a: pageListType, b: pageListType) =>
        {          
          return`${a.name}` === pageIndexState ? -1 : 1}
      ),
    [pageList, pageIndexState]
  );

  return (
    <div className="page-stacks">
      {sortedPageList.map(({ name, component }, key) => {
        return (
          <StackedPage
            setMenuOpen={setMenuOpen}
            name={name}
            key={key}
            pageIndex={`${name}`}
            pageIndexState={pageIndexState}
            styleIndex={key}
            setSelectMenuItem={setSelectMenuItem}
          >
            {component}
          </StackedPage>
        );
      })}
    </div>
  );
}
