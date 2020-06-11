import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Date from '../../components/Date';

import utilStyles from '../../styles/utils.module.css';

import { gelAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/posts/[id]" as="/posts/ssg-ssr">
        <a>link</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = gelAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
