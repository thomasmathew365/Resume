import { useEffect } from 'react';

import PageStacks from '../../components/PageStacks';
import { LARGE_NAV_ITEMS, SMALL_NAV_ITEMS } from '../../constants/navigation';
import { HomeProps } from '../../utils/commonTypes';
import { componentMap, loadSanityData } from '../../utils/utils';

export default function Blog({
  wallData,
  postData,
  selectMenuItem,
  menuOpen,
  setSelectMenuItem,
  setMenuOpen
}: HomeProps) {
  const dataProps = [null, null, wallData, postData];

  useEffect(() => {
    setSelectMenuItem('BLOG');
  }, [setSelectMenuItem]);

  return (
    <PageStacks
      menuOpen={menuOpen}
      setSelectMenuItem={setSelectMenuItem}
      setMenuOpen={setMenuOpen}
      pageIndexState={`${selectMenuItem}`}
      pageList={[...LARGE_NAV_ITEMS, ...SMALL_NAV_ITEMS].map((name, key) => ({
        name,
        component: componentMap[name](dataProps[key]),
      }))}
    />
  );
}

export async function getStaticProps() {
  return await loadSanityData();
}

