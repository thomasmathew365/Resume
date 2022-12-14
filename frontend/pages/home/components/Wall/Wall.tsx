import classNames from 'classnames';
import { ReactElement } from 'react';

import styles from './Wall.module.scss';

export default function Wall(): ReactElement {
    return (
        <div className={classNames(styles["experience-wrapper"])}>
            test
        </div >
    );
}
