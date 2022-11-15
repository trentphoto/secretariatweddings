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

// <div class="nav">
//   <div class="nav-inner"><a id="w-node-_46dfe929-6d9a-a8d0-4cdd-c0e65d2b5126-5d2b5124" href="/"
//       class="nav-link w-inline-block">
//       <div>Home</div>
//     </a><img src="https://assets.website-files.com/6244728a7aadaf6230add222/625447541b761a0940d1d4a9_menu-dot.svg"
//       loading="lazy" id="w-node-_46dfe929-6d9a-a8d0-4cdd-c0e65d2b5129-5d2b5124" alt="" class="menu-dot"><a
//       id="w-node-_46dfe929-6d9a-a8d0-4cdd-c0e65d2b512a-5d2b5124" href="/about" aria-current="page"
//       class="nav-link w-inline-block w--current">
//       <div>About</div>
//     </a><img src="https://assets.website-files.com/6244728a7aadaf6230add222/625447541b761a0940d1d4a9_menu-dot.svg"
//       loading="lazy" alt="" class="menu-dot mobile-hide"><a id="w-node-_46dfe929-6d9a-a8d0-4cdd-c0e65d2b512e-5d2b5124"
//       href="/wedding/portfolio" class="nav-link w-inline-block">
//       <div>Portfolio</div>
//     </a><img src="https://assets.website-files.com/6244728a7aadaf6230add222/625447541b761a0940d1d4a9_menu-dot.svg"
//       loading="lazy" id="w-node-_46dfe929-6d9a-a8d0-4cdd-c0e65d2b5131-5d2b5124" alt="" class="menu-dot"><a
//       href="/reviews" class="nav-link w-inline-block">
//       <div>Reviews</div>
//     </a><img src="https://assets.website-files.com/6244728a7aadaf6230add222/625447541b761a0940d1d4a9_menu-dot.svg"
//       loading="lazy" alt="" class="menu-dot mobile-hide"><a id="w-node-b73edf8f-ffe4-df49-d6de-0898340594ce-5d2b5124"
//       href="/blog" class="nav-link w-inline-block">
//       <div>Blog</div>
//     </a><img src="https://assets.website-files.com/6244728a7aadaf6230add222/625447541b761a0940d1d4a9_menu-dot.svg"
//       loading="lazy" id="w-node-f79b17bb-0f30-263b-c62f-cb8c67b57f11-5d2b5124" alt="" class="menu-dot"><a
//       id="w-node-_46dfe929-6d9a-a8d0-4cdd-c0e65d2b5132-5d2b5124" href="/contact" class="nav-link w-inline-block">
//       <div>Contact</div>
//     </a></div>
// </div>
