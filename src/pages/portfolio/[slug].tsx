import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

import { getSortedPortfolioData } from '@/lib/portfolio';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import YouTube from '@/components/YouTube';

import Portfolio from '@/types/Portfolio';

export default function BlogPostPage({
  content,
  name,
  location,
  youtube,
  image,
}: Portfolio) {
  return (
    <>
      <Layout>
        <Seo templateTitle={name} image={image} />
        <Header />

        <main>
          <section className='bg-gray-100 py-20 text-center'>
            <div className='container max-w-3xl space-y-3'>
              <h1 className='font-bold'>{name}</h1>
              <p className='smallcaps'>{location}</p>
            </div>
          </section>
          <section className='py-12'>
            <div className='container max-w-3xl p-4'>
              <ArrowLink className='mb-4' direction='left' href='/portfolio'>
                Back to Portfolio
              </ArrowLink>

              {youtube ? <YouTube youtubeId={youtube} /> : ''}
              <div className='mb-8'></div>

              <div
                dangerouslySetInnerHTML={{ __html: marked(content) }}
                className='content list-disc'
              />
            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPortfolioData();
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
    path.join('content/portfolio', slug + '.md'),
    'utf-8'
  );

  const matterResult = matter(markdownWithMeta);

  const post = {
    content: matterResult.content,
    date: matterResult.data.date,
    slug: matterResult.data.slug,
    name: matterResult.data.name,
    location: matterResult.data.location,
    image: matterResult.data.image,
    category: matterResult.data.category,
    youtube: matterResult.data.youtube ? matterResult.data.youtube : '',
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
