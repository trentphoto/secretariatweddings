import Link from 'next/link';
import * as React from 'react';

import Nav from '@/components/Nav';
import NextImage from '@/components/NextImage';

import Flourish from '~/svg/flourish2.svg';

// const links = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/portfolio', label: 'Portfolio' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/Reviews', label: 'Reviews' },
//   { href: '/contact', label: 'Contact' },
// ];

export default function Footer() {
  return (
    <>
      <footer className='p-24'>
        <div className='container flex flex-col items-center justify-center space-y-10'>
          <Nav className='' />

          <NextImage
            src='/images/zola.png'
            width='100'
            height='100'
            alt='zola'
            className=''
          />

          <Flourish width='200' height='50' className='' />

          <p>© 2022 Secretariat Media, LLC.</p>
        </div>
      </footer>
      <div className='container flex justify-center items-center space-x-6 p-6 text-sm border-gray-300 border-t'>
        <Link className='p-1' href="/privacy-policy">Privacy Policy</Link>
        {/* <Link className='p-1' href="/terms">Terms & Conditions</Link> */}
      </div>
    </>
  );
}
