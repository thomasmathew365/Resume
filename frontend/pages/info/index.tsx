import PageStacks from '../../components/PageStacks';
import { SMALL_NAV_ITEMS } from '../../constants/navigation';
import SanityClient from '../../utils/sanityClient';
import { NavFunctionTypes } from '../_app';
import HomeComponent from '../home/components/Home';

const componentMap: {[key: string]: (data: any) => JSX.Element} = {
  "BLOG": () => <HomeComponent />, 
  "CONTACT":() => <HomeComponent />, 
  "WALL": () => <HomeComponent />
}

interface HomeProps extends NavFunctionTypes {
  wallData: any;
  menuOpen: boolean;
  selectedMenuGroup: number;
  selectMenuItem: string;
}

export default function Home({
  wallData,
  selectedMenuGroup,
  selectMenuItem,
  menuOpen,
  setSelectedMenuGroup,
  setSelectMenuItem,
  setMenuOpen
}: HomeProps) {
  console.log("🚀 ~ file: index.tsx:29 ~ selectedMenuGroup", selectedMenuGroup)
  console.log("🚀 ~ file: index.tsx:29 ~ selectMenuItem", selectMenuItem)
  const dataProps = [null, null, wallData];
  return (
    <PageStacks
      menuOpen={menuOpen}
      setSelectedMenuGroup={setSelectedMenuGroup}
      setSelectMenuItem={setSelectMenuItem}
      setMenuOpen={setMenuOpen}
      groupIndex={1}
      pageIndexState={`${selectedMenuGroup}${selectMenuItem}`}
      pageList={SMALL_NAV_ITEMS.map((name, key) => ({
        name,
        component: componentMap[name](dataProps[key]),
      }))}
    />
  );
}

export async function getStaticProps() {
  const client = new SanityClient();
  const wallData = await client.Query(`*[_type == 'wall']`);
  return {
    props: {
      wallData,
    },
  };
}


