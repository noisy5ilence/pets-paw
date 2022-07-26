import { NextPageContext } from 'next';
import nookies from 'nookies';
import { v4 } from 'uuid';

export const getUid = (ctx?: NextPageContext) => {
  const cookies = nookies.get(ctx);
  const catsLoverUid = cookies.catsLoverUid;

  if (!catsLoverUid) {
    const uid = v4();

    nookies.set(ctx, 'catsLoverUid', uid, {
      maxAge: 300 * 24 * 60 * 60,
      path: '/',
    });

    return uid;
  }

  return catsLoverUid;
};