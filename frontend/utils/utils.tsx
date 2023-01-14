import imageUrlBuilder from '@sanity/image-url';

import { Body } from '../components/PostBody/Post.type';
import BlogComponent from '../pages/home/components/Blog';
import HomeComponent from '../pages/home/components/Home';
import ResumeComponent from '../pages/home/components/Resume';
import WallComponent from '../pages/home/components/Wall';
import SanityClient from './sanityClient';

export function getRandomArrayValue(array: any[]) {
    return array[Math.floor(Math.random() * array.length)]
};

export const componentMap: { [key: string]: (data: any) => JSX.Element } = {
    "HOME": () => <HomeComponent />,
    "RESUME": () => <ResumeComponent />,
    "WALL": (dataProps) => <WallComponent data={dataProps} />,
    "BLOG": dataProps => <BlogComponent data={dataProps}/>,
    "CONTACT": () => <HomeComponent />,
    "MY WORK": (dataProps) => <WallComponent data={dataProps} />
}


export async function loadSanityData() {
    const client = SanityClient;
    const wallData = await client.fetch(`*[_type == 'wall']`);
    const postData = await client.fetch(`*[_type == 'post']`);

    return {
        props: {
            wallData,
            postData
        },
    };
}

export function urlFor(source: Body) {
    const builder = imageUrlBuilder(SanityClient);
    return builder.image(source)
}