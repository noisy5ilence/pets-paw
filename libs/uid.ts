import { cookies } from 'next/headers';
import { v4 } from 'uuid';

export default function uid() {
  const Cookies = cookies();
  const petLoverId = Cookies.get('petLoverId')?.value;

  if (petLoverId) return petLoverId;

  const uid = v4();

  const days = 30;
  const hours = 24;
  const minutes = 60;
  const seconds = 60;

  Cookies.set('petLoverId', uid, {
    maxAge: days * hours * minutes * seconds,
    path: '/'
  });

  return uid;
}
