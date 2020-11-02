import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Blog({ posts, locale }) {
  return (
    <div className="container mx-auto p-3">
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
        BLOG
      </h3>
      <div className="grid grid-cols-3 gap-4 my-4">
        {posts.map((post) => (
          <Link href={{ pathname: '/blog/[id]', query: { id: post._id } }} locale={locale} key={post._id}>
            <a>
              <div className="shadow">
                <Image
                  src={post.cover_url}
                  alt="Image"
                  width={640}
                  height={320}
                />
                <div className="meta p-4">
                  <h2 className="text-3xl">{post.title}</h2>
                  <h6>{post.excerpt}</h6>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired
};

export async function getStaticProps({ locale }) {
  const res = await fetch(`${process.env.API_PATH}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      locale,
      posts
    }
  };
}

export default Blog;
