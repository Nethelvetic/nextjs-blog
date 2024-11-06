import Head from 'next/head';
import Layout from '../../components/layout';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function MesPost({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="premier blog" />
        <title>Mes Posts</title>
      </Head>
      <main>
        <section>
          <h2>Liste des titres des blogs</h2>
          <ul>
            {allPostsData.map(({ id, title, date }) => (
              <li key={id}>
                <Link href={`/post/${id}`} legacyBehavior><a>{title}</a></Link> - <span>{date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
