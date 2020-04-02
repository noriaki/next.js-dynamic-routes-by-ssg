import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { customAlphabet } from 'nanoid/async';

import styles from '../styles/ColorsPage.module.css';

const nanoid = customAlphabet('1234567890abcdef', 6);

interface Props {
  color: string;
};

const ColorsPage: NextPage<Props> = ({ color }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    color = '000000';
  }

  return (
    <div>
      <p>Welcome to Random color page!</p>
      <p>
        Current color: #{slug}
        <span
          className={styles.box}
          style={{ backgroundColor: `#${slug}` }}
        />
      </p>
      <Link href="/[slug]" as={`/${color}`}>
        <a>
          Link to random color #{color}
          <span
            className={styles.box}
            style={{ backgroundColor: `#${color}` }}
          />
        </a>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const color = await nanoid();
  return {
    props: {
      color
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'ff0000' } },
    ],
    fallback: true,
  };
};

export default ColorsPage;
