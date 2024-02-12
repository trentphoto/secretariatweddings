import * as React from 'react';

import Logo from '~/svg/logo.svg';

export default function HomeHero() {
  return (
    <div className='relative w-screen overflow-hidden py-24	'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0 h-full w-full'>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster='/images/hero-poster.jpg'
          style={{
            objectFit: 'cover',
            backgroundImage: '/images/hero-poster.jpg',
            width: '100%',
            height: '100%',
          }}
        >
          <source src='/video/hero.mp4' />
        </video>
        {/* <NextImage layout='fill' objectFit='cover' src={HeroImage} alt='hero' className='z-0' /> */}
      </div>
      <div className='container relative z-20 mx-auto flex items-center justify-center p-4'>
        <Logo width='700' height='300' aria-label='Secretariat Wedding Films' />
      </div>
    </div>
  );
}
