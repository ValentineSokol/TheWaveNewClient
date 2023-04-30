import React, { useState, useId } from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Button } from '../common/Button/Button.jsx';

import styles from './Navbar.module.scss';

export function Navbar() {
  const [mobileNavbarExpanded, setMobileNavbarExpanded] = useState(false);
  const mobileNavbarAccordionId = useId();

  return (
    <nav className={styles.navMenu}>
      <ul
        className={clsx(
          {
            [styles.navAccordionExpanded]:
            mobileNavbarExpanded,
          },
        )}
        id={mobileNavbarAccordionId}
      >
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/read">Read Stories</NavLink>
        </li>
      </ul>
      <Button
        type="button"
        className={styles.hamburger}
        onClick={() => setMobileNavbarExpanded((prev) => !prev)}
        ariaLabel="Toggle Menu"
        ariaExpanded={mobileNavbarExpanded}
        ariaControls={mobileNavbarAccordionId}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </nav>
  );
}
