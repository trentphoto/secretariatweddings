import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Portfolio from '@/types/Portfolio';

export default function PortfolioPhotographyPage({
  portfolioItems,
}: {
  portfolioItems: Portfolio[];
}) {
  return (
    <Layout>
      <Seo />
      <Header />

      <main>
        <section className='bg-gray-100 py-20 text-left'>
          <div className='container max-w-4xl items-center space-y-4 px-12 md:flex md:space-x-20'>
            <h1 className='max-w-md text-5xl font-bold'>Portfolio</h1>
            <p className=''>
              View our films and photography below. Check back frequently as we
              are always adding more weddings to this page.
            </p>
          </div>
        </section>
        <section>
          <div className='container flex items-end justify-center space-x-4 text-center text-sm tracking-wider'>
            <Link
              className='border-b-2 border-white p-5 px-8 uppercase transition-colors hover:border-gray-200'
              href='/portfolio'
            >
              Wedding Films
            </Link>
            <Link
              className='border-b-2 border-gray-700 p-5 px-8 uppercase'
              href='/portfolio/photography'
            >
              Wedding Photography
            </Link>
          </div>
        </section>
        <section className='py-12'>
          <div className='container max-w-3xl space-y-16'>
            {portfolioItems.map((item, key) => (
              <>
                <Link
                  key={key}
                  href={`/portfolio/${item.slug}`}
                  className='block p-12 shadow transition-shadow hover:shadow-md'
                >
                  <NextImage
                    src={item.image}
                    alt={item.name}
                    width='768'
                    height='300'
                    className='mb-8 overflow-hidden rounded'
                  />
                  <h3 className='mb-2 font-derivia text-3xl font-normal uppercase tracking-wider'>
                    {item.name}
                  </h3>
                  <p className='smallcaps'>{item.location}</p>
                </Link>
              </>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');
  const fileNames = fs.readdirSync(portfolioDirectory);
  const portfolioItemsAll = fileNames.map((fileName) => {
    // read markdown file as a string
    const markdownWithMeta = fs.readFileSync(
      path.join(portfolioDirectory, fileName),
      'utf-8'
    );

    // use gray-matter to parse the gray matter
    const matterResult = matter(markdownWithMeta);
    const content = matterResult.content;
    const { date, slug, name, location, image, category } = matterResult.data;

    return {
      content,
      date,
      slug,
      name,
      location,
      image,
      category,
    };
  });

  const portfolioItems = portfolioItemsAll.filter(
    (item) => item.category === 'photography'
  );

  return {
    props: {
      portfolioItems,
    },
  };
}
