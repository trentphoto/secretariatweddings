import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Layout from "@/components/layout/Layout"
import NextImage from '@/components/NextImage'
import Seo from "@/components/Seo"

import Portfolio from '@/types/Portfolio'

export default function PortfolioPage({ portfolioItems }: {
  portfolioItems: Portfolio[]
}){

  return (
    <Layout>
      <Seo />
      <Header />

      <main>
        <section className="py-20 bg-gray-100 text-left">
          <div className="container max-w-4xl md:flex items-center md:space-x-20 px-12 space-y-4">
            <h1 className='font-bold text-5xl max-w-md'>Portfolio</h1>
            <p className=''>View our films and photography below. Check back frequently as we are always adding more weddings to this page.</p>
          </div>
        </section>
        <section>
          <div className="container flex justify-center items-end space-x-4 text-center tracking-wider text-sm">
            <Link 
              className='p-5 px-8 uppercase border-b-2 border-gray-700' 
              href="/portfolio"
            >
              Wedding Films
            </Link>
            <Link 
              className='p-5 px-8 uppercase border-b-2 border-white hover:border-gray-200 transition-colors' 
              href="/portfolio/photography">
              Wedding Photography
            </Link>

          </div>
        </section>
      <section className="py-12"> 
        <div className="container max-w-3xl space-y-16">

          
          {
            portfolioItems.map((item, key) => (
              <>
                <Link 
                  href={`/portfolio/${item.slug}`}
                  className="block p-12 shadow hover:shadow-md transition-shadow"
                  >
                    <NextImage
                      src={item.image}
                      alt={item.name}
                      width="768"
                      height="300"
                      className='overflow-hidden rounded mb-8'
                    />
                    <h3 className='font-derivia uppercase tracking-wider font-normal text-3xl mb-2'>{item.name}</h3>
                    <p className="smallcaps">{item.location}</p>
                  </Link>
                  

              </>
            ))
          }
          
        </div>
      </section>

      </main>
      <Footer />
    </Layout>
  )
}

export async function getStaticProps(){
  const portfolioDirectory = path.join(process.cwd(), 'content/portfolio')
  const fileNames = fs.readdirSync(portfolioDirectory)
  const portfolioItemsAll = fileNames.map((fileName) => {

    // read markdown file as a string
    const markdownWithMeta = fs.readFileSync(
      path.join(portfolioDirectory, fileName), 
      'utf-8'
    )

    // use gray-matter to parse the gray matter
    const matterResult = matter(markdownWithMeta)
    const content = matterResult.content
    const { date, slug, name, location, image, category } = matterResult.data

    return {
        content,
        date,
        slug,
        name,
        location,
        image,
        category
    }
  })

  const portfolioItems = portfolioItemsAll.filter(item => item.category === 'films')

  return {
    props: {
      portfolioItems
    }
  }

}