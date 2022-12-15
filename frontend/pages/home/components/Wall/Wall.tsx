import 'reactjs-popup/dist/index.css';

import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import Modal from '../../../../components/Modal/Modal';
import Postit from '../../../../components/Postit';
import CommentForm from './CommentForm';
import styles from './Wall.module.scss';

const container = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    show: {
        opacity: 1,
        x: "0",
        transition: {
            staggerChildren: 0.1,
            delay: 0.2,
            type: 'spring'
        }
    }
}

const item = {
    hidden: {
        opacity: 0, x: "-100vw"
    },
    show: {
        opacity: 1, x: "0",
    }
}

export interface mutationProps {
    name: string,
    comment: string,
    email: string
}


export default function Wall({ data }: any): ReactElement {

    const router = useRouter();
    // Call this function whenever you want to
    // refresh props!
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    // const [wallData, setWallData] = useState<any[]>([]);
    // console.log("🚀 ~ file: Wall.tsx:52 ~ Wall ~ wallData", wallData)


    // useEffect(() => {
    //     const client = new SanityClient();

    //     // declare the data fetching function
    //     const fetchData = async () => {
    //         const wallData = await client.Query(`*[_type == 'wall']`);
    //         setWallData(wallData);
    //     }

    //     // call the function
    //     fetchData()
    //         // make sure to catch any error
    //         .catch(console.error);
    // }, []);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const saveComment = async function (mutation: FieldValues) {
        const projectId = process.env.NEXT_PUBLIC_SANITY_ID;
        const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN_WITH_WRITE_ACCESS;
        const mutations = [
            {
                "createOrReplace": {
                    ...mutation,
                    "_type": "wall"
                }
            }
        ];
        const result = await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/production`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${tokenWithWriteAccess}`
            },
            body: JSON.stringify({ mutations })
        })

        if (result.status === 200) {
            refreshData();
            close();
        }
        return result;
    }

    const PostItContent = useCallback(({ comment, name, email }: { [k: string]: string }) =>
    (
        <div className={classNames(styles["post-it-comment-wrapper"])}>
            <div className={classNames(styles["post-it-comment"])}>{comment}</div>
            <div className={classNames(styles["post-it-name"])} title={email}>{`- ${name}`}</div>

        </div>
    ), []
    );

    const PostIts = useMemo(() => {
        return data.map(({ comment, name, email }: any, k: number) => {
            return (
                <motion.div variants={item} >
                    <Postit key={k}><PostItContent comment={comment} name={name} email={email}/></Postit>
                </motion.div>
            )
        })
    }, [data])

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={classNames(styles["postits-wrapper"])}>
                {PostIts}
                <AnimatePresence
                    initial={false}
                    mode={'wait'}
                    onExitComplete={() => null}
                >
                    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} >{<CommentForm saveComment={saveComment} />}</Modal>}
                </AnimatePresence>
            </motion.div >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={classNames(styles["float"])}
                onClick={() => (modalOpen ? close() : open())}
            >
                <FontAwesomeIcon icon={faAdd} size="2x" />
            </motion.div>
        </>
    );
}


