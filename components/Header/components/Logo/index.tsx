import Link from 'next/link';

import { title } from '@/constants/title';

import LogoIcon from './icons/logo.svg';

import styles from './styles.module.css';

const Logo = () => {
  return (
    <Link href='/' className={styles.root} title={title}>
      <LogoIcon className={styles.text} />
    </Link>
  );
};

export default Logo;
