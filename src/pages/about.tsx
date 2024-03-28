import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Logo1d from '~/images/brands/1d.svg';
import LogoAtomos from '~/images/brands/atomos.svg';
import LogoBlackMagic from '~/images/brands/blackmagic.svg';
import logoCanon from '~/images/brands/canon.png';
import LogoDji from '~/images/brands/dji.svg';
import LogoDzo from '~/images/brands/dzofilm.png';
import LogoR5 from '~/images/brands/r5.png';
import LogoRed from '~/images/brands/red.png';

export default function AboutPage() {
  return (
    <Layout>
      <Seo />
      <Header />
      <main>
        <section className='md:p-12'>
          <div className='container'>
            <div className='bg-gray-100 p-8'>
              <div className='flex w-full flex-col items-start justify-between border border-gray-700 p-8 lg:flex-row-reverse'>
                <NextImage
                  src='https://res.cloudinary.com/dakfmjumy/image/upload/v1672711123/content/posts/alvin-mahmudov-436ZVxZOtEM-unsplash_1_kc1zlw.jpg'
                  alt='bride'
                  width='400'
                  height='400'
                  className='mb-12 overflow-hidden rounded-md shadow-md lg:mb-0'
                />

                <div className='mb-6 md:mb-0 md:w-1/2'>
                  <p className='smallcaps mb-4 text-sm'>About Us</p>
                  <h2 className='text-md mb-6 text-gray-600 md:text-5xl'>
                    Award-Winning East Coast Wedding Cinematography.
                  </h2>
                  <div className='max-w-md'>
                    <p className='mb-2'>
                      Your wedding day is a once-in-a-lifetime event.
                    </p>
                    <p className='mb-2'>
                      And it’s my belief that you should have a beautiful and
                      timeless record of it.
                    </p>
                    <p className='mb-2'>
                      That's why I started Secretariat Media.
                    </p>
                    <p className='mb-2'>
                      My team and I use state-of-the-art equipment and a
                      cinematic, documentary-focused approach to capture every
                      emotion and detail of your day.
                    </p>
                    <p className='mb-2'>
                      From the vows and speeches to the first dance and bouquet
                      toss, we make it our duty to capture every moment, every
                      aspect of your day, and preserve it for you to treasure
                      for years to come.
                    </p>
                    <p className='mb-2'>
                      Our films are much more than a record of your day - they
                      are art. We carefully craft each edit to bring your love
                      story to life and do our best to capture the essence of
                      your relationship.
                    </p>
                    <p className='mb-2'>
                      We aren’t for everyone. But for those we work with, we
                      commit ourselves to making the wedding film you’ve always
                      dreamed of.
                    </p>
                    <p className='mb-2'>
                      Contact us today to start planning your dream wedding
                      videography package.
                    </p>
                  </div>
                  <ButtonLink href='/contact'>Set up a Call</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className='container'>
            <h1 className='mb-8 text-center'>Using only the best state-of-the-art equipment</h1>
            <div className='mx-auto grid max-w-md grid-cols-2 items-center gap-12 p-2 opacity-70 grayscale md:max-w-3xl md:grid-cols-4'>
              <LogoDji
                width='200'
                height='200'
                aria-label='DJI'
                className='w-full'
              />
              <Logo1d
                width='200'
                height='200'
                aria-label='Canon EOS 1D'
                viewBox='0 0 800 250'
                className='w-full'
              />
              <LogoAtomos
                width='200'
                height='200'
                aria-label='Atomos'
                className='w-full'
              />
              <LogoBlackMagic
                width='200'
                height='200'
                aria-label='BlackMagicDesign'
                className='w-full'
              />
              <NextImage
                src={logoCanon}
                width='200'
                height='200'
                alt='Canon'
                className='w-full'
              />
              <NextImage
                src={LogoDzo}
                width='200'
                height='200'
                alt='DZOFilm'
                className='w-full'
              />
              <NextImage
                src={LogoR5}
                width='200'
                height='200'
                alt='EOS R5'
                className='w-full'
              />
              <NextImage
                src={LogoRed}
                width='200'
                height='200'
                alt='RED'
                className='w-full'
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </Layout>
  );
}
