import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useRef, useState } from 'react';

import styles from './Blog.module.scss';

export default function Blog(): ReactElement {

    const cardsRef = useRef<any>(null);
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<null | number>(null);

    useEffect(() => {
        const cardsRefCurrent = cardsRef.current;
        const mouseMove = (e: MouseEvent) => {
            for (let i = 0; i < cardsRefCurrent.childNodes.length; i++) {
                const card = cardsRefCurrent.childNodes[i];
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
        cardsRefCurrent.addEventListener("mousemove", mouseMove);
        return () => {
            cardsRefCurrent.removeEventListener("mousemove", mouseMove);
        };

    }, [cardsRef])

    return (
        <>
            <AnimatePresence>
                {selectedId && (
                    <motion.div 
                    className={classNames(styles["post-loading"])} 
                    layoutId={selectedId.toString()}
                    >
                        <button style={{marginTop: '50px'}} onClick={(e) => {
                                e.preventDefault();
                                router.push(`/blog`);
                                setSelectedId(null);

                            }}>Back</button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={classNames(styles["cards"])} ref={cardsRef}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, k) => {
                    return (
                        <motion.div
                            className={classNames(styles["card"])}
                            layoutId={(k + 1).toString()}
                            key={k}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(`/blog/post${v}`);
                                setSelectedId(k + 1);
                            }}>
                            <div className={classNames(styles["card-content"])}>
                                <div className={classNames(styles["card-image"])}>
                                    {/* <i class="fa-duotone fa-apartment"></i> */}
                                </div>
                                <div className={classNames(styles["card-info-wrapper"])}>
                                    <div className={classNames(styles["card-info"])}>
                                        <div className={classNames(styles["card-info-title"])}>
                                            <h3>Apartments{v}</h3>
                                            <h4>Places to be apart. Wait, what?</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
}
