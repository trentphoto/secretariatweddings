import Link from 'next/link';

import { getSortedPostsData } from '@/lib/posts';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Post from '@/types/Post';

export default function BlogPage(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <Layout>
      <Seo />
      <Header />

      <main>
        <section className='py-12'>
          <div className='container max-w-3xl space-y-16'>
            {posts.map((post: Post, key: number) => (
              <Link
                key={key}
                href={`/blog/${post.slug}`}
                className='block w-full space-y-4 rounded p-12 shadow-md transition hover:shadow-lg'
              >
                <div className='flex h-80 w-full items-center justify-center overflow-hidden rounded-xl shadow-md'>
                  <NextImage
                    src={post.image}
                    width='700'
                    height='400'
                    alt={post.title}
                    className='h-full'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    priority={key === 0}
                  />
                </div>
                <h3 className='font-playfair text-4xl'>{post.title}</h3>
                <p className='smallcaps'>{post.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
