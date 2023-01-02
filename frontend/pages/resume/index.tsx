import { useEffect } from 'react';

import PageStacks from '../../components/PageStacks';
import { LARGE_NAV_ITEMS, SMALL_NAV_ITEMS } from '../../constants/navigation';
import SanityClient from '../../utils/sanityClient';
import { NavFunctionTypes } from '../_app';
import BlogComponent from '../home/components/Blog';
import HomeComponent from '../home/components/Home';
import ResumeComponent from '../home/components/Resume';
import WallComponent from '../home/components/Wall';

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

export default function Resume({
    wallData,
    selectMenuItem,
    menuOpen,
    setSelectMenuItem,
    setMenuOpen
}: HomeProps) {
    const dataProps = [null, null, wallData];


    useEffect(() => {
        setSelectMenuItem('RESUME');
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
    const client = new SanityClient();
    const wallData = await client.Query(`*[_type == 'wall']`);
    return {
        props: {
            wallData,
        },
    };
}

