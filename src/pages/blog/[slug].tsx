import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

import { getSortedPostsData } from '@/lib/posts';

import AuthorBox from '@/components/AuthorBox';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Post from '@/types/Post';

export default function BlogPostPage({
  content,
  title,
  subtitle,
  image,
}: Post) {
  return (
    <>
      <Layout>
        <Seo />
        <Header />

        <main>
          <section className='bg-gray-100 py-20 px-4 text-center'>
            <div className='container max-w-3xl space-y-3'>
              <h1 className='font-bold'>{title}</h1>
              <p className='smallcaps'>{subtitle}</p>
            </div>
          </section>
          <section className='py-12 px-4'>
            <div className='container max-w-3xl'>
              <NextImage
                src={image}
                width='768'
                height='200'
                className='mb-12 flex h-72 items-center overflow-hidden rounded-xl shadow-md'
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              <div
                dangerouslySetInnerHTML={{ __html: marked(content) }}
                className='content list-disc'
              />

              <AuthorBox />
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: never) {
  const markdownWithMeta: string = fs.readFileSync(
    path.join('content/posts', slug + '.md'),
    'utf-8'
  );

  const matterResult = matter(markdownWithMeta);

  const post = {
    content: matterResult.content,
    date: matterResult.data.date,
    slug: matterResult.data.slug,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    image: matterResult.data.image,
    // ...matterResult.data
  };

  return {
    props: {
      ...post,
    },
  };
}

// export async function getStaticPaths() {
//   const allPostsData: Post[] = getSortedPostsData();
//   const paths = allPostsData.map(post => post.slug)
//   return {
//     paths,
//     fallback: false,
//   }
// }
