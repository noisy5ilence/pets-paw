import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import classes from 'classnames';

import Popup from '@/components/Popup';
import Status from '@/components/Upload/components/Status';

import UploadArea from './components/UploadArea';
import API from './api';

import styles from './styles.module.css';

interface Props {
  onClose: () => void;
}

const Upload: FC<Props> = ({ onClose }) => {
  const [file, setFile] = useState<File>();

  const { reset, ...upload } = useMutation(() => API.upload({ file: file! }), {
    onSuccess() {
      setFile(undefined);
    }
  });

  return (
    <Popup
      onClose={onClose}
      classNames={{
        root: styles.root,
        close: styles.close,
        body: styles.body
      }}
    >
      <h4 className={styles.title}>Upload a .jpg or .png Cat Image</h4>
      <p className={styles.description}>
        <span>Any uploads must comply with the</span>
        <a href='https://thecatapi.com/privacy/' target='_blank' rel='noreferrer'>
          upload guidelines
        </a>
        <span>or face deletion.</span>
      </p>
      <UploadArea onPreviewUpload={setFile} file={file} onClick={() => reset()} hasError={Boolean(upload.error)} />
      <p className={styles.filename}>{file ? `Image File Name: ${file?.name}` : 'No file selected'}</p>
      {file && (
        <button
          className={classes(styles.upload, 'button', 'upload', { [styles.uploading]: upload.isLoading })}
          onClick={() => upload.mutate()}
        >
          {upload.isLoading ? (
            <>
              <div className={styles.loader} />
              <span>uploading</span>
            </>
          ) : (
            'UPLOAD PHOTO'
          )}
        </button>
      )}

      {(upload.error as AxiosError)?.response?.status === 400 && (
        <div className={styles.status}>
          <Status type='error' />
        </div>
      )}

      {Boolean(upload?.data) && (
        <div className={styles.status}>
          <Status type='success' />
        </div>
      )}
    </Popup>
  );
};

export default Upload;
