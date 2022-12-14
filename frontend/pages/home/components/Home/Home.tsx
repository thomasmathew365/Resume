import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement } from 'react';

import profilePic from '../../../../public/profile.jpg';
import styles from './Home.module.scss';

export default function Home(): ReactElement {
  return (
    <div className={classNames(styles["floating-flex"])}>
      <div className={classNames(styles["container"])}>
      <div className={classNames(styles["container-bg"])}> </div>
        <div className={classNames(styles["row"], styles["name"])}>
        <div className={classNames(styles["name-super"])}>Thinker / Maker / Problem Solver</div>

          <div className={classNames(styles["firstname"])}>Thomas</div>
          <div className={classNames(styles["lastname"])}>Mathew</div>
        </div>
        <div className={classNames(styles["row"], styles["image"])}>
          <div className={classNames(styles["profile-image"])}>
            <Image
              src={profilePic}
              alt="profile picture"
              fill
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
        <div className={classNames(styles["row"], styles["description"])}>
          <p className={classNames(styles["description-text"])}>
            <span className={classNames(styles["description-text-child"])}>
              I design and build high-quality, scalable, and performant UIs that provide a seamless experience for users.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
