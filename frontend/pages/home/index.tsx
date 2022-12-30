import PageStacks from '../../components/PageStacks';
import { LARGE_NAV_ITEMS, SMALL_NAV_ITEMS } from '../../constants/navigation';
import SanityClient from '../../utils/sanityClient';
import { NavFunctionTypes } from '../_app';
import BlogComponent from './components/Blog';
import HomeComponent from './components/Home';
import ResumeComponent from './components/Resume';
import WallComponent from './components/Wall';

const componentMap: { [key: string]: (data: any) => JSX.Element } = {
  "HOME": () => <HomeComponent />,
  "RESUME": () => <ResumeComponent />,
  "WALL": (dataProps) => <WallComponent data={dataProps} />,
  "BLOG": () => <BlogComponent />, 
  "CONTACT": () => <HomeComponent />, 
  "MY WORK": (dataProps) => <WallComponent data={dataProps} />
}

interface HomeProps extends NavFunctionTypes {
  wallData: any;
  menuOpen: boolean;
  selectMenuItem: string;
}

export default function Home({
  wallData,
  selectMenuItem,
  menuOpen,
  setSelectedMenuGroup,
  setSelectMenuItem,
  setMenuOpen
}: HomeProps) {
  const dataProps = [null, null, wallData];
  return (
    <PageStacks
      menuOpen={menuOpen}
      setSelectedMenuGroup={setSelectedMenuGroup}
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
  const client = new SanityClient();
  const wallData = await client.Query(`*[_type == 'wall']`);
  return {
    props: {
      wallData,
    },
  };
}

