import classNames from 'classnames';
import React, { MouseEvent, ReactElement, useEffect, useRef } from 'react';

import styles from './Blog.module.scss';

export default function Resume(): ReactElement {

    const cardsRef = useRef<any>(null);

    useEffect(() => {
        if (cardsRef && cardsRef.current && cardsRef.current.childNodes) {
            cardsRef.current.onmousemove = (e: MouseEvent) => {
                for (let i = 0; i < cardsRef.current.childNodes.length; i++) {
                    const card = cardsRef.current.childNodes[i];
                    const rect = card.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                }
            }
            () => cardsRef.current.onmousemove = null;
        }
    }, [cardsRef])



    return (
        <div className={classNames(styles["cards"])} ref={cardsRef}  >
            <div className={classNames(styles["card"])}>
                <div className={classNames(styles["card-content"])}>
                    <div className={classNames(styles["card-image"])}>
                        {/* <i class="fa-duotone fa-apartment"></i> */}
                    </div>
                    <div className={classNames(styles["card-info-wrapper"])}>
                        <div className={classNames(styles["card-info"])}>
                            <div className={classNames(styles["card-info-title"])}>
                                <h3>Apartments</h3>
                                <h4>Places to be apart. Wait, what?</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles["card"])}>
                <div className={classNames(styles["card-content"])}>
                    <div className={classNames(styles["card-image"])}>
                        {/* <i class="fa-duotone fa-apartment"></i> */}
                    </div>
                    <div className={classNames(styles["card-info-wrapper"])}>
                        <div className={classNames(styles["card-info"])}>
                            <div className={classNames(styles["card-info-title"])}>
                                <h3>Apartments</h3>
                                <h4>Places to be apart. Wait, what?</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles["card"])}>
                <div className={classNames(styles["card-content"])}>
                    <div className={classNames(styles["card-image"])}>
                        {/* <i class="fa-duotone fa-apartment"></i> */}
                    </div>
                    <div className={classNames(styles["card-info-wrapper"])}>
                        <div className={classNames(styles["card-info"])}>
                            <div className={classNames(styles["card-info-title"])}>
                                <h3>Apartments</h3>
                                <h4>Places to be apart. Wait, what?</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
