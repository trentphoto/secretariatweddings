import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import path from 'path';

import { getSortedPostsData } from '@/lib/posts'

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Post from '@/types/Post';


export default function BlogPostPage({ content, date, slug, title, subtitle, image }: Post) {
  
  return (
    <>
      <Layout>
        <Seo />
        <Header />

        <main>
          <section className="py-20 bg-gray-100 text-center">
            <div className="container max-w-3xl space-y-3">
              <h1 className='font-bold'>{title}</h1>
              <p className='smallcaps'>{subtitle}</p>
            </div>
          </section>
          <section className="py-12">
            <div className="container max-w-3xl">
              <NextImage 
                src={image}
                width="768"
                height="200"
                className='h-72 flex items-center mb-12 shadow-md rounded-xl overflow-hidden'
                alt={title}
              />
              <div 
                dangerouslySetInnerHTML={{__html: marked(content)}}
                className="content list-disc"
              />

            </div>
          </section>
        </main>
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params: {slug}}: never) {
  const markdownWithMeta: string = fs.readFileSync(
    path.join('content/posts', slug + '.md'),
    'utf-8'
  )

  const matterResult = matter(markdownWithMeta)

  const post = {
    content: matterResult.content,
    date: matterResult.data.date,
    slug: matterResult.data.slug,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    image: matterResult.data.image,
    // ...matterResult.data
  }

  return {
    props: {
      ...post,
    }
  }
}


// export async function getStaticPaths() {
//   const allPostsData: Post[] = getSortedPostsData();

//   const paths = allPostsData.map(post => post.slug)

//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   }
  

// }