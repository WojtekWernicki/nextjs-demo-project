import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import PropTypes from 'prop-types';

function Blog({ post, locale }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
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

export async function getStaticPaths({ locales }) {
  const res = await fetch(`${process.env.API_PATH}/api/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post._id);

  const paths = locales.reduce((acc, locale) => [
    ...acc,
    ...ids.map(((id) => ({
      params: { id },
      locale
    })))
  ], []);

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
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
