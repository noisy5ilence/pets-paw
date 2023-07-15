'use client';

import { FC, ReactElement, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

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
    <div
      className={cn(styles.overlay, { [styles.hideOverlay]: isHideOverlay })}
    >
      <div
        ref={bodyRef}
        className={cn(styles.popup, 'appear-bottom', className, { [styles.hideOverlay]: isHideOverlay })}
      >
        <div className={styles.header}>
          <button className="button vector" onClick={handleClose}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z"
                fill="#FF868E"
              />
            </svg>
          </button>
        </div>
        <div className={styles.body}>{typeof children === 'function' ? children(handleClose) : children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
