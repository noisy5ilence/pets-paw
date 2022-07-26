import { FC } from 'react';

interface Props {
  size: 'small' | 'large';
}

export const Loader: FC<Props> = ({ size = 'small' }) => {
  return size === 'small' ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="url(#paint0_angular_1_1598)" strokeWidth="2"/>
      <defs>
        <radialGradient id="paint0_angular_1_1598" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8 8) rotate(90) scale(8)">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  ) : (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="49.9998" y="-17.1752" width="95" height="95" rx="47.5" transform="rotate(45 49.9998 -17.1752)" stroke="url(#paint0_angular_1_468)" strokeWidth="5"/>
      <defs>
        <radialGradient id="paint0_angular_1_468" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.9998 29.2893) rotate(90) scale(50)">
          <stop stopColor="#FBE0DC"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
};