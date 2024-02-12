import * as React from 'react';

import TopSocket from '@/components/layout/TopSocket';
import Nav from '@/components/Nav';

import Logo from '~/svg/logo-main-header.svg';

// const links = [
// { href: '/', label: 'Route 1' },
// { href: '/', label: 'Route 2' },
// ];

export default function Header({ minimal }: { minimal?: boolean }) {
  return (
    <>
      <TopSocket />
      <header className=''>
        <div className='container flex flex-col items-center'>
          <div className='mx-4 max-w-full'>
            <Logo
              width='500'
              height='160'
              alt='Secretariat Wedding Films'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          {minimal ? '' : <Nav />}
        </div>
      </header>
    </>
  );
}
