import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PostBody from '../../components/PostBody';
import { PostRoot } from '../../components/PostBody/Post.type';
import styles from '../home/components/Blog/Blog.module.scss';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const [post, setPost] = useState<null | PostRoot>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://${process.env.NEXT_PUBLIC_SANITY_ID}.api.sanity.io/v${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/data/query/production?query=*[slug.current == '${slug}']`);
            const data = response.data.result[0];
            console.log("🚀 ~ file: [slug].tsx:18 ~ fetchData ~ data", data)
            setPost(data);
        };

        // once you have the slug, call `fetchData`
        if (slug) {
            fetchData();
        }
    }, [slug]);

    return (
        <div className={classNames(styles["post-container"])}>
            <FontAwesomeIcon className={classNames(styles["back-button"])} icon={faChevronCircleLeft} size="2x" onClick={(e) => {
                e.preventDefault();
                router.push(`/blog`);
            }}/>

            <main className={classNames(styles["post"], styles["text-content"])}>

                <header className={classNames(styles["post-header"])}>
                    <h1 className={classNames(styles["uppercase"])}>
                        <span><span className={classNames(styles["post-header-text"])}>{post?.title}</span></span>
                    </h1>
                </header>
                {post && <PostBody body={post?.body} />}
            </main>
        </div>)
}

