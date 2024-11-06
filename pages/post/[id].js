import Head from 'next/head';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';


export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const paths = allPostsData.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const postData = allPostsData.find((post) => post.id === params.id);
  
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </article>
      
    </Layout>
  );
}
