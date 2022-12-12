import PageStacks from '../../components/PageStacks';
import { LARGE_NAV_ITEMS } from '../../constants/navigation';
import SanityClient from '../../utils/sanityClient';
import { NavFunctionTypes } from '../_app';
import HomeComponent from './components/Home';
import ResumeComponent from './components/Resume';

const componentMap: {[key: string]: () => JSX.Element} = {
  "HOME": () => <HomeComponent />, 
  "RESUME":() => <ResumeComponent />, 
  "MY WORK": () => <HomeComponent />
}

interface HomeProps extends NavFunctionTypes {
  homeData: any;
  menuOpen: boolean;
  selectedMenuGroup: number;
  selectMenuItem: string;
}

export default function Home({
  homeData,
  selectedMenuGroup,
  selectMenuItem,
  menuOpen,
  setSelectedMenuGroup,
  setSelectMenuItem,
  setMenuOpen
}: HomeProps) {
  return (
    <PageStacks
      menuOpen={menuOpen}
      setSelectedMenuGroup={setSelectedMenuGroup}
      setSelectMenuItem={setSelectMenuItem}
      setMenuOpen={setMenuOpen}
      groupIndex={0}
      pageIndexState={`${selectedMenuGroup}${selectMenuItem}`}
      pageList={LARGE_NAV_ITEMS.map((name, key) => ({
        name,
        component: componentMap[name](),
      }))}
    />
  );
}

export async function getStaticProps() {
  const client = new SanityClient();
  const homeData = await client.Query(`*[_type == "home"]`);
  return {
    props: {
      homeData,
    },
  };
}
