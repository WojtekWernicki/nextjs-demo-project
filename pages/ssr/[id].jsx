import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import PropTypes from 'prop-types';

function Blog({ post, locale }) {
  return (
    <>
      <Head>
        <title>SSR | {post.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hrefLang={locale} />
      </Head>
      <div className="container flex flex-col mx-auto p-3">
        <div className="w-full flex justify-center">
          <Image
            src={post.cover_url}
            alt="Image"
            width={640}
            height={320}
            priority
          />
        </div>
        <div className="meta p-4">
          <h2 className="text-3xl">{post.title}</h2>
          <h6>{post.excerpt}</h6>
        </div>
      </div>
    </>
  );
}

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired
};

export async function getServerSideProps({ params, locale }) {
  const res = await fetch(`${process.env.API_PATH}/api/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      locale,
      post
    }
  };
}

export default Blog;
