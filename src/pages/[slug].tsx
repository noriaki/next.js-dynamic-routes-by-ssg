import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const AnySlugsPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Welcome to Next.js! params: {slug}</div>
}

export default AnySlugsPage;
