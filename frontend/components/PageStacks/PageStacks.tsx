import React, { ReactElement, useMemo } from 'react';

import { NavFunctionTypes } from '../../pages/_app';
import StackedPage from '../StackedPage';

interface pageListType {
  name: string;
  component: ReactElement;
}

interface PageStacksProps extends NavFunctionTypes {
  pageList: pageListType[];
  groupIndex: number;
  pageIndexState: string;
  menuOpen: boolean;
}

export default function PageStacks({
  pageList,
  groupIndex,
  pageIndexState,
  menuOpen,
  setSelectMenuItem,
  setSelectedMenuGroup,
  setMenuOpen
}: PageStacksProps) {
  const sortedPageList = useMemo(
    () => 
      pageList.sort((a: pageListType, b: pageListType) =>
        {          
          return`${groupIndex}${a.name}` === pageIndexState ? -1 : 1}
      ),
    [pageList, groupIndex, pageIndexState]
  );

  return (
    <div className="page-stacks">
      {sortedPageList.map(({ name, component }, key) => {
        return (
          <StackedPage
          setMenuOpen={setMenuOpen}
            name={name}
            key={key}
            pageIndex={`${groupIndex}${name}`}
            pageIndexState={pageIndexState}
            styleIndex={menuOpen ? key - 1 : -1}
            setSelectedMenuGroup={setSelectedMenuGroup}
            setSelectMenuItem={setSelectMenuItem}
          >
            {component}
          </StackedPage>
        );
      })}
    </div>
  );
}
