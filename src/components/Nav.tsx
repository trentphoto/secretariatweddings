import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import Dot from '~/svg/dot.svg';

type NavProps = React.ComponentPropsWithoutRef<'div'>;

export default function Nav (props: NavProps) {
  return (
    <div className='p-4' {...props}>
      <div className='container mx-auto flex flex-wrap items-center justify-center space-x-2 text-sm uppercase tracking-wider'>
        <ButtonLink variant='nav' href='/'>
          Home
        </ButtonLink>
        <Dot />
        <ButtonLink variant='nav' href='/about'>
          About
        </ButtonLink>
        <Dot />
        <ButtonLink variant='nav' href='/portfolio'>
          Portfolio
        </ButtonLink>
        <Dot />
        <ButtonLink variant='nav' href='/reviews'>
          Reviews
        </ButtonLink>
        <Dot />
        <ButtonLink variant='nav' href='/blog'>
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

