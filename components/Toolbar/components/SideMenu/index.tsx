'use client';

import { FC, useState } from 'react';

import Navigation from '@/components/Navigation';
import Popup from '@/components/Popup';

import classes from './styles.module.css';

const SideMenu: FC = () => {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  return (
    <>
      <button className="button vector" onClick={() => setIsShowSideMenu(true)}>
        <svg
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
            fill="#FF868E"
          />
        </svg>
      </button>
      {isShowSideMenu && (
        <Popup isHideOverlay onClose={() => setIsShowSideMenu(false)}>
          <div className={classes.navigation}>
            <Navigation />
          </div>
        </Popup>
      )}
    </>
  );
};

export default SideMenu;
