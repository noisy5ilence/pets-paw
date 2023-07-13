import { FC } from 'react';
import Image from 'next/image';

interface Props {
  pet: RandomPet;
  onLoadingComplete: () => void;
}
const RandomPet: FC<Props> = ({ pet, onLoadingComplete }) => {
  return <Image
    src={pet!.url}
    layout="fill"
    alt="Cat"
    onLoadingComplete={onLoadingComplete}
  />
}

export default RandomPet;