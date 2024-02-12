import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Dress from '~/images/dress.jpeg';
import Review1 from '~/images/reviews/davin-elisha.jpg';
import Review2 from '~/images/reviews/doug-anna.jpg';
import Review3 from '~/images/reviews/image-3.jpg';
import Review4 from '~/images/reviews/matthew-ayana.jpg';

export default function ReviewsPage() {
  return (
    <Layout>
      <Seo />
      <Header />
      <main>
        <div className='section relative'>
          <div className='absolute top-0 left-0 bottom-0 right-0 -z-10 bg-black opacity-25'></div>
          <div className='absolute top-0 left-0 bottom-0 right-0 -z-20'>
            <NextImage
              src={Dress}
              alt='bridal dress'
              layout='fill'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className='container z-20 py-32 text-center'>
            <h1 className='mb-8 font-test text-6xl uppercase text-white'>
              Over 25 Love Stories In 2022
            </h1>
            <ButtonLink className='font-bold' href='/contact'>
              Book Us Today
            </ButtonLink>
          </div>
        </div>

        <section className='py-32'>
          <div className='container'>
            <h1 className='mx-auto mb-12 mt-12 max-w-2xl text-center font-derivia text-3xl font-bold uppercase tracking-wide'>
              See What Couples Are Saying About Their Experience
            </h1>
            <div className='grid gap-8 md:grid-cols-2'>
              <div className='flex flex-col items-start border border-gray-800 p-12'>
                <NextImage
                  className='mb-6 w-full'
                  src={Review1}
                  width='400'
                  height='250'
                  alt='Elisa + Davin'
                />
                <div className='p-4'>
                  <p className='mb-4'>
                    Truly a captivating experience. We just want to thank you so
                    much for being with us on our special day - we had so much
                    fun!
                  </p>
                  <p className='font-bold'>Elisha + Davin</p>
                  <p className='italic'>Married in Trenton, NJ</p>
                </div>
              </div>

              <div className='flex flex-col items-start border border-gray-800 p-12'>
                <NextImage
                  className='mb-6 w-full'
                  src={Review2}
                  width='400'
                  height='250'
                  alt='Elisa + Davin'
                />
                <div className='p-4'>
                  <p className='mb-4'>
                    Thank you for everything you did with the video! We hired
                    you last minute, and we’re very thankful for you and your
                    expertise… Great guy, and we appreciate you very much.
                  </p>
                  <p className='font-bold'>Doug + Anna</p>
                  <p className='italic'>Married in Burke, VA</p>
                </div>
              </div>

              <div className='flex flex-col items-start border border-gray-800 p-12'>
                <NextImage
                  className='mb-6 w-full'
                  src={Review3}
                  width='400'
                  height='250'
                  alt='Elisa + Davin'
                />
                <div className='p-4'>
                  <p className='mb-4'>
                    Simply phenomenal experience. You guys went above and beyond
                    to capture every detail of our day. It was such a privilege
                    to work with you guys!
                  </p>
                  <p className='font-bold'>Adhton + Cameron</p>
                  <p className='italic'>Married in State College, PA</p>
                </div>
              </div>

              <div className='flex flex-col items-start border border-gray-800 p-12'>
                <NextImage
                  className='mb-6 w-full'
                  src={Review4}
                  width='400'
                  height='250'
                  alt='Elisa + Davin'
                />
                <div className='p-4'>
                  <p className='mb-4'>
                    Thank you for your effort and vision you had of us and our
                    families on our special day. James was so responsive, shot
                    every thing we asked and more! You guys were incredible!
                  </p>
                  <p className='font-bold'>Matthew + Ayana</p>
                  <p className='italic'>Married in Bealeton, VA</p>
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
