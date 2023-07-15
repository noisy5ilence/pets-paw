'use client';

import { FC, useState } from 'react';

import Navigation from '@/components/Navigation';
import Popup from '@/components/Popup';

import MenuIcon from './icons/menu.svg';

import classes from './styles.module.css';

const SideMenu: FC = () => {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  return (
    <>
      <button className='button vector' onClick={() => setIsShowSideMenu(true)}>
        <MenuIcon />
      </button>
      {isShowSideMenu && (
        <Popup isHideOverlay onClose={() => setIsShowSideMenu(false)}>
          {(onClose) => (
            <div className={classes.navigation}>
              <Navigation onRedirect={onClose} />
            </div>
          )}
        </Popup>
      )}
    </>
  );
};

export default SideMenu;
