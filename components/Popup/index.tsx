'use client';

import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from 'classnames';
import cn from 'classnames';

import CrossIcon from './icons/cross.svg';

import styles from './styles.module.css';

interface Props {
  children: ReactNode | ((onClose: () => void) => ReactNode);
  onClose: () => void;
  isHideOverlay?: boolean;
  classNames?: Record<string, string>;
}

const Popup: FC<Props> = ({ children, onClose, isHideOverlay, classNames }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(() => {
    bodyRef.current?.classList.add('disappear-top');

    bodyRef.current?.addEventListener('animationend', onClose, { once: true });
  }, []);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code !== 'Escape') return;

      handleClose();
    };
    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [handleClose]);

  return createPortal(
    <div className={cn(styles.overlay, { [styles.hideOverlay]: isHideOverlay })}>
      <div
        ref={bodyRef}
        className={cn(styles.popup, 'appear-bottom', classNames?.root, { [styles.hideOverlay]: isHideOverlay })}
      >
        <div className={styles.header}>
          <button className={classes('button vector', classNames?.close)} onClick={handleClose}>
            <CrossIcon />
          </button>
        </div>
        <div className={classes(styles.body, classNames?.body)}>
          {typeof children === 'function' ? children(handleClose) : children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
