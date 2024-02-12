import Link from 'next/link';

import Nav from '@/components/Nav';
import NextImage from '@/components/NextImage';

import Flourish from '~/svg/flourish2.svg';
import WeddingMinuteLogo from '~/svg/wmlogo.svg';

export default function Footer() {
  return (
    <>
      <footer className='p-24'>
        <div className='container flex flex-col items-center justify-center space-y-20'>
          <Nav />

          <div className='flex flex-col items-center gap-8 grayscale sm:flex-row'>
            <p>Featured on...</p>
            <WeddingMinuteLogo
              width='160'
              height='40'
              aria-label='WeddingMinute'
            />
            <NextImage
              src='/images/zola.png'
              width='100'
              height='100'
              alt='zola'
            />
            <NextImage
              src='/images/petapixel.webp'
              width='100'
              height='100'
              alt='PetaPixel'
            />
          </div>

          <Flourish width='200' height='50' />

          <p>© 2022 Secretariat Media, LLC.</p>
        </div>
      </footer>
      <div className='container flex items-center justify-center space-x-6 border-t border-gray-300 p-6 text-sm'>
        <Link className='p-1' href='/privacy-policy'>
          Privacy Policy
        </Link>
      </div>
    </>
  );
}
