

import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Layout from "@/components/layout/Layout"
import NextImage from '@/components/NextImage'
import Seo from "@/components/Seo"

import Post from '@/types/Post'

export default function BlogPage(props: {
  posts: Post[]
}){

  const { posts } = props

  return (
    <Layout>
      <Seo />
      <Header />

      <main>

        <section className="py-12">
          <div className="container max-w-3xl space-y-16">
            {posts.map((post: Post, key: number) => (
                <Link
                  key={key} 
                  href={`/blog/${post.slug}`}
                  className='block space-y-4 p-12 w-full rounded shadow-md transition hover:shadow-lg' 
                >
                  <div className="h-80 w-full overflow-hidden shadow-md rounded-xl flex items-center justify-center">
                    <NextImage
                      src={post.image}
                      width="700"
                      height="400"
                      alt={post.title}
                      style={{
                        width:'100%',
                        height:'100%',
                        objectFit:'cover'
                      }}
                      priority={key === 0}
                    />

                  </div>
                  <h3 className='font-playfair text-4xl'>{post.title}</h3>
                  <p className="smallcaps">{post.subtitle}</p>
                </Link>
            ))}
          </div>
        </section>


        
      </main>
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  }
}
