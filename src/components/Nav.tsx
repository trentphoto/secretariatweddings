import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import Dot from '~/svg/dot.svg';

type NavProps = React.ComponentPropsWithoutRef<'div'>;

export default function Nav (props: NavProps) {
  return (
    <div className='p-4' {...props}>
      <div className='
      container grid grid-cols-3 md:flex flex-wrap items-center justify-center space-x-2 

      text-sm uppercase tracking-wider
      '
      style={{
        gridTemplateColumns: '1fr 23px 1fr'
      }}
      >
        <ButtonLink variant='nav' href='/' className='justify-self-end'>
          Home
        </ButtonLink>
        <div>
          <Dot />
        </div>
        <ButtonLink variant='nav' href='/about'>
          About
        </ButtonLink>
        <div className="hidden md-inline-block">
          <Dot />
        </div>
        <ButtonLink variant='nav' href='/portfolio' className='justify-self-end'>
          Portfolio
        </ButtonLink>
        <div>
          <Dot />
        </div>
        <ButtonLink variant='nav' href='/reviews'>
          Reviews
        </ButtonLink>
        <div className="hidden md-inline-block">
          <Dot />
        </div>
        <ButtonLink variant='nav' href='/blog' className='justify-self-end'>
          Blog
        </ButtonLink>
        <Dot />
        <ButtonLink variant='nav' href='/contact'>
          Contact
        </ButtonLink>
      </div>
    </div>
  );
}

