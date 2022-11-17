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
                  src='/images/hk.jpg'
                  alt='James Trent'
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
                      Secretariat is an award-winning East Coast wedding
                      cinematography studio founded by James Trent. Based in
                      Washington, DC, we serve clients all across the East Coast
                      and beyond.
                    </p>
                    <p className='mb-6'>
                      With a long history of working with couples to document
                      their special day and create the wedding video of their
                      dreams, Secretariat Media was founded on the principles of
                      filmmaking to create an an authentic, creative, and
                      memorable finished product.
                    </p>
                  </div>
                  <ButtonLink href='/'>Watch the Film</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className='container'>
            <h1 className='mb-8 text-center'>
              Using only the best state-of-the-art equipment
            </h1>
            <div className='mx-auto grid max-w-md grid-cols-2 items-center gap-12 p-2 opacity-70 grayscale md:max-w-3xl md:grid-cols-4'>
              <LogoDji width='200' height='200' alt='DJI' className='w-full' />
              <Logo1d
                width='200'
                height='200'
                alt='Canon EOS 1D'
                viewBox='0 0 800 250'
                className='w-full'
              />
              <LogoAtomos
                width='200'
                height='200'
                alt='Atomos'
                className='w-full'
              />
              <LogoBlackMagic
                width='200'
                height='200'
                alt='BlackMagicDesign'
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

        <section className='bg-gray-100 md:p-12'>
          <div className='container'>
            <div className='p-8'>
              <div className='flex w-full flex-col items-start justify-between border border-gray-700 p-8 lg:flex-row-reverse lg:p-16'>
                <NextImage
                  src='/images/james.webp'
                  alt='James Trent'
                  width='400'
                  height='400'
                  className='mb-12 overflow-hidden rounded-md shadow-md brightness-125 grayscale lg:mb-0 lg:ml-4'
                />

                <div className='mb-6 lg:mb-0 lg:mr-6 lg:w-1/2'>
                  <p className='smallcaps mb-4 text-sm'>Meet Your Filmmaker</p>
                  <h2 className='mb-6 text-5xl text-gray-600'>James Trent</h2>
                  <div className='max-w-md'>
                    <p className='mb-2'>
                      With over 10 years experience in cinematic video
                      production, James has a passion for capturing moments and
                      creating an artistic, meaningful final product.
                    </p>
                    <p className='mb-6'>
                      Not only is your wedding video an investment, but it's one
                      of the most special and meaningful days of your life.
                      That's why James brings over 10 years experience creating
                      cinematic videos with original sound design and stunning
                      visuals — to ensure each priceless moment is captured
                      forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
