import { ChangeEvent, Dispatch, DragEvent, FC, SetStateAction, useState } from 'react';
import classes from 'classnames';
import Image from 'next/image';

import Loader from '@/components/Loader';
import ImageStub from '@/public/photo-stub.svg';

import styles from './styles.module.css';

interface Props {
  file?: File;
  onPreviewUpload: Dispatch<SetStateAction<File | undefined>>;
  onClick: () => void;
  hasError?: boolean;
}

const UploadArea: FC<Props> = ({ onPreviewUpload, file, onClick, hasError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string>('');
  const [isDragActive, setDragActive] = useState(false);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.prototype.slice.call(event.target.files);

    if (!file) return;

    const reader = new FileReader();

    setIsLoading(true);

    reader.addEventListener('load', () => {
      setPreview(reader.result as string);
      setIsLoading(false);
    });

    reader.readAsDataURL(file);
    onPreviewUpload(file);
  };

  const preventDefault =
    (handler: (event: DragEvent<HTMLLabelElement>) => void) => (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault();
      event.stopPropagation();

      return handler(event);
    };

  const handleDragIn = preventDefault(() => setDragActive(true));
  const handleDragOut = preventDefault(() => setDragActive(false));
  const handleDrop = preventDefault((event) => {
    const { files } = event.dataTransfer;

    if (!files && files[0]) return;

    setDragActive(false);
    handleUpload({ target: { files } } as ChangeEvent<HTMLInputElement>);
  });

  return (
    <label
      className={classes(styles.root, { [styles.error]: hasError, [styles.dragDrop]: isDragActive })}
      onClick={onClick}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDragIn}
      onDrop={handleDrop}
    >
      <input type='file' className={styles.input} accept='image/jpeg, image/png' onChange={handleUpload} />
      <div className={styles.image}>
        {file ? (
          isLoading ? (
            <Loader />
          ) : (
            <Image src={preview} alt={file!.name} layout='fill' />
          )
        ) : (
          <div className={styles.stub}>
            <ImageStub />
            <span className={styles.instruction}>
              <b>Drag here</b> your file or <b>Click here</b> to upload
            </span>
          </div>
        )}
      </div>
    </label>
  );
};

export default UploadArea;
