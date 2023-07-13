import classes from "classnames";
import NextImage from "next/image";
import { FC, ReactElement } from "react";

import imageStub from "@/public/photo-stub.svg";

import styles from "./styles.module.css";

type Photos = Array<{ image: Image | undefined; name: string }>;

interface Props {
  photos: Photos;
  className?: string;
}

const Grid: FC<Props> = ({ photos, className }) => {
  return (
    <div className={styles.root}>
      <div className={classes(styles.grid, className)}>
        {photos.map(({ image: photo, name }) => {
          const image = photo || {
            id: "",
            url: imageStub.src,
            width: 200,
            height: 200,
          };
          return (
            <figure key={name} className={styles.photo}>
              <NextImage
                src={image.url}
                placeholder="empty"
                layout="fill"
                alt={name}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
