import * as React from 'react';

import HomeHero from '@/components/HomeHero';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import TopSocket from '@/components/layout/TopSocket';
import ButtonLink from '@/components/links/ButtonLink';
import Nav from '@/components/Nav';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Flourish from '~/svg/flourish2.svg';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <TopSocket />

      <main>
        <HomeHero />
        <Nav />
        <section className='p-8'>
          <div className='container text-center'>
            <h1 className='mt-12 font-derivia text-3xl font-bold uppercase tracking-wide'>
              Award-winning East Coast Wedding Filmmaker
            </h1>
            <p className='smallcaps mt-2 text-xs'>
              Washington DC • Maryland • Virginia • Delaware • Pennsylvania •
              New York • New England • Carolinas
            </p>
          </div>
        </section>
        
        <section className='md:p-12'>
          <div className='container'>
            <div className='bg-gray-100 p-8'>
              <div className='flex flex-col-reverse border border-gray-700 p-8 md:flex-row'>
                <div className='width-1/2 mb-6 md:mb-0'>
                  <p className='smallcaps mb-4 text-sm'>Latest film</p>
                  <h2 className='mb-6 max-w-md'>
                    Ayana + Matthew: A Gorgeous Summer Wedding at Morais
                    Vineyards
                  </h2>
                  <ButtonLink href='/'>Watch the Film</ButtonLink>
                </div>
                <div className='width-1/2 relative max-w-md grow mb-4 md:mb-0 md:pl-4'>
                  <NextImage
                    src='/images/ayana.jpg'
                    alt='Ayana + Matthew'
                    width='500'
                    height='300'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='p-8'>
          <div className='container text-center'>
            <h2 className='mb-6'>
              Your wedding day happens only once. Relive it forever.
            </h2>
            <ButtonLink href='/portfolio'>View Our Portfolio</ButtonLink>
          </div>
        </section>

        <section className='p-8 py-24'>
          <div className='container flex flex-col items-center text-center'>
            <h2 className='mb-6 font-derivia text-3xl font-bold uppercase tracking-wide'>
              What People Are Saying
            </h2>
            <p className='mb-2 text-xl italic'>
              "Truly a captivating experience"
            </p>
            <p className='text-md mb-2'>Davin & Elisha</p>
            <Flourish width='100' height='50' className='' />
            <ButtonLink href='/reviews'>See Reviews</ButtonLink>
          </div>
        </section>

        <section className='p-8 py-24'>
          <div className='container flex flex-col items-center text-center'>
            <h2 className='mb-2 font-derivia text-3xl font-bold uppercase tracking-wide'>
              Serving the entire East Coast region
            </h2>
            <p className='smallcaps mb-8 text-xs'>
              Washington DC • Maryland • Virginia • Delaware • Pennsylvania •
              New York • New England • Carolinas
            </p>
            <div className='mb-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
              <NextImage
                src='/images/home-1.webp'
                width='250'
                height='250'
                className='w-full'
                alt='Wedding Cinematography Portfolio'
              />
              <NextImage
                src='/images/home-2.webp'
                width='250'
                height='250'
                className='w-full'
                alt='Wedding Cinematography Portfolio'
              />
              <NextImage
                src='/images/home-3.webp'
                width='250'
                height='250'
                className='w-full'
                alt='Wedding Cinematography Portfolio'
              />
              <NextImage
                src='/images/home-4.webp'
                width='250'
                height='250'
                className='w-full'
                alt='Wedding Cinematography Portfolio'
              />
            </div>
            <ButtonLink href='/contact'>
              Message Us to Check Availability
            </ButtonLink>
          </div>
        </section>

        <section className='md:p-12'>
          <div className='container'>
            <div className='bg-gray-100 p-4 md:p-8'>
              <div className='flex flex-row items-stretch border border-gray-700 p-8'>
                <div className='width-1/2 mb-6 max-w-none sm:max-w-md md:mb-0'>
                  <p className='smallcaps mb-4 text-sm'>
                    Interested in Working With Us?
                  </p>
                  <h2 className='mb-6 max-w-md text-5xl'>Get in Touch</h2>
                  <p className='text-lg'>
                    We take on a limited number of clients each year to ensure
                    we provide the time, attention, and creative resources
                    needed to make your project a masterpiece.
                  </p>
                  <p className='mb-4 text-lg'>
                    If you're interested in working with us, please fill out our
                    contact form and let's set up a time to talk.
                  </p>
                  <ButtonLink href='/contact'>Contact Us</ButtonLink>
                </div>
                <div className='width-1/2 relative mx-auto hidden max-w-md md:block'>
                  <NextImage
                    src='/svg/flourish3.svg'
                    alt='stylistic'
                    width='100'
                    height='200'
                    className='h-full w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-gray-100 py-12'>
          <div className='container w-full md:flex md:justify-between'>
            <div className='w-full p-6 md:w-1/2'>
              <p className='smallcaps mb-4 text-sm'>Free Downloadable PDF</p>
              <h2 className='mb-6 max-w-md text-3xl'>
                Shot List: 5 Must-Have Video Shots on your Wedding Day
              </h2>
              <p className='text-lg'></p>
              <p className='mb-4 text-lg'>
                5 shots every bride should have their videographer be sure to
                capture on their special day.
              </p>
              <ButtonLink href='/l/shotlist'>Download for Free</ButtonLink>
            </div>
            <div className="p-6">
              <div className="w-full relative aspect-square max-w-md">
                <NextImage
                  src='/images/shotlist.jpeg'
                  alt='Shot List'
                  layout='fill'
                  className='p-6'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
