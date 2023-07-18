import client from '@/network';

const API = {
  upload({ file }: { file: File }) {
    const form = new FormData();

    form.append('file', file);

    return client.post('/images/upload', form);
  }
};

export default API;
