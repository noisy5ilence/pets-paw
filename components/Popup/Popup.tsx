import cn from 'classnames';
import { FC, ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';

import classes from './Popup.module.css';

interface Props {
  children: ReactElement;
  onClose: () => void;
  isHideOverlay?: boolean;
}

export const Popup: FC<Props> = ({ children, onClose, isHideOverlay }) => {
  return createPortal((
    <div className={cn(classes.overlay, {[classes.hideOverlay]: isHideOverlay})}>
      <div className={cn(classes.popup, {[classes.hideOverlay]: isHideOverlay})}>
        <div className={classes.header}>
          <button className='button vector' onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z" fill="#FF868E"/>
            </svg>
          </button>
        </div>
        <div className={classes.body}>
          {children}
        </div>
      </div>
    </div>
  ), document.getElementById('portal')!);
};