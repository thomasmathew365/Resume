import classNames from 'classnames';
import { ReactElement } from 'react';

import { ComponentWithChildren } from '../../types';
import { getRandomArrayValue } from '../../utils/utils';
import styles from './Postit.module.scss';

const paperColors = ["yellow", "green", "pink", "orange", "aqua"];
const paperRotationValues = ["-10", "-5", "5", "10"];
const pinkLocation = ["left", "right","left"];

export default function Postit({ children }: ComponentWithChildren): ReactElement {
  const paperColor = getRandomArrayValue(paperColors);

  return (
    <div className={classNames(styles["paper"], styles[`paper-${paperColor}`])} 
    style={{transform: `rotate(${getRandomArrayValue(paperRotationValues)}deg)`}}>
      <div className={classNames(styles["pin"], styles[`pin-${getRandomArrayValue(pinkLocation)}`])}>
        <div className={styles["shadow"]}></div>
        <div className={styles["metal"]}></div>
        <div className={styles["bottom-circle"]}></div>
      </div>
      {children}
    </div>
  );
}
