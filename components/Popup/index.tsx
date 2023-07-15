'use client';

import { FC, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import CrossIcon from './icons/cross.svg';

import styles from './styles.module.css';

interface Props {
  children: ReactNode | ((onClose: () => void) => ReactNode);
  onClose: () => void;
  isHideOverlay?: boolean;
  className?: string;
}

const Popup: FC<Props> = ({ children, onClose, isHideOverlay, className }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    bodyRef.current?.classList.add('disappear-top');

    bodyRef.current?.addEventListener('animationend', onClose, { once: true });
  };
  return createPortal(
    <div className={cn(styles.overlay, { [styles.hideOverlay]: isHideOverlay })}>
      <div
        ref={bodyRef}
        className={cn(styles.popup, 'appear-bottom', className, { [styles.hideOverlay]: isHideOverlay })}
      >
        <div className={styles.header}>
          <button className='button vector' onClick={handleClose}>
            <CrossIcon />
          </button>
        </div>
        <div className={styles.body}>{typeof children === 'function' ? children(handleClose) : children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
