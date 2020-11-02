import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function Blog({ post }) {
  return (
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
  );
}

Blog.propTypes = {
  post: PropTypes.object.isRequired
};

export async function getStaticPaths({ locales }) {
  const res = await fetch('/api/posts');
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
  const res = await fetch(`/api/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      locale,
      post
    }
  };
}

export default Blog;
