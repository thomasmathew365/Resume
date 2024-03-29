import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ReactElement, useCallback } from 'react';

import { LARGE_NAV_ITEMS, SMALL_NAV_ITEMS } from '../../constants/navigation';
import { NavigationContext } from '../../lib/navigationContext';
import { NavFunctionTypes } from '../../pages/_app';
import styles from './Navbar.module.scss';

export default function Navbar({ setMenuOpen, setSelectMenuItem }: NavFunctionTypes): ReactElement {

  const setMenuState = useCallback((itemName: string) => {
    // setSelectedMenuGroup(groupIndex);
    setSelectMenuItem(itemName);
    setMenuOpen();
    return undefined; //to appease onclick return type
  }, [setSelectMenuItem, setMenuOpen])

  return (
    <NavigationContext.Consumer>
      {({ menuOpen }) => {
        return (
          <nav className={styles["navbar"]} id="nav">
            <div
              className={classNames(
                styles["menuitems-container"],
                menuOpen ? styles["opened"] : styles["closed"]
              )}
            >
              {LARGE_NAV_ITEMS.map((title, k) => {
                return (
                  <div
                    key={k}
                    className={classNames(
                      styles["nav-item"],
                      styles["nav-item-large"]
                    )}
                    onClick={() =>
                      setMenuState(title)
                    }
                  >
                    {title}
                  </div>
                );
              })}
              {SMALL_NAV_ITEMS.map((title, k) => {
                return (
                  <div
                    key={k}
                    className={classNames(
                      styles["nav-item"],
                      styles["nav-item-small"]
                    )}
                    onClick={() =>
                      setMenuState(title)
                    }
                  >
                    {title}
                  </div>
                );
              })}
              <div
                className={classNames(
                  styles["nav-item"],
                  styles["nav-item-socials"],
                  menuOpen ? styles["opened"] : styles["closed"]
                )}
              >
                <a href={"https://github.com/thomasmathew365"} target={"_blank"} rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    className={classNames(styles["nav-social-link"])}
                  />
                </a>
                <a href={"https://www.linkedin.com/in/thomasmathew365/"} target={"_blank"} rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={classNames(styles["nav-social-link"])}
                  />
                </a>
                <a href={"mailto:thomasmathew365@gmail.com"} target={"_blank"} rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={classNames(styles["nav-social-link"])}
                  />
                </a>
              </div>
            </div>

            <div
              className={classNames(
                styles["navbar-container"],
                menuOpen ? styles["opened"] : ""
              )}
              onClick={() => setMenuOpen()}
            >
              <div className={styles["hamburger-lines"]}>
                <span
                  className={classNames(styles["line"], styles["line1"])}
                ></span>
                <span
                  className={classNames(styles["line"], styles["line2"])}
                ></span>
                <span
                  className={classNames(styles["line"], styles["line3"])}
                ></span>
              </div>
            </div>
          </nav>
        );
      }}
    </NavigationContext.Consumer>
  );
}
