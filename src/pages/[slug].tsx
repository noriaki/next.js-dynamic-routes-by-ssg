import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { customAlphabet } from 'nanoid/non-secure';

import styles from '../styles/ColorsPage.module.css';

const nanoid = customAlphabet('1234567890abcdef', 6);

const ColorsPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const color = nanoid();
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

export default ColorsPage;
