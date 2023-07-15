import { FC, SyntheticEvent, useEffect, useRef } from 'react';
import classes from 'classnames';

import styles from './styles.module.css';

interface Props {
  pets: RandomPet[];
  index: number;
}
const RandomPet: FC<Props> = ({ pets, index }) => {
  const refs = useRef<Record<string, HTMLLIElement>>({});

  useEffect(() => {
    const photo = refs.current[index];
    if (!photo) return;

    photo.scrollIntoView({ behavior: 'smooth' });
  }, [index]);

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const container = (event.target as HTMLImageElement)?.parentElement;
    if (!container) return;

    container.classList.remove(styles.loading);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {pets?.map((pet, petIndex) => (
          <li
            key={pet.id}
            className={classes(styles.item, styles.loading)}
            ref={(element) => (refs.current[petIndex] = element!)}
          >
            <img src={pet.url} onLoad={handleImageLoad} alt='Pet' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomPet;
