import * as React from 'react';

import TopSocket from '@/components/layout/TopSocket';
import Nav from '@/components/Nav'

import Logo from '~/svg/logo-main-header.svg'

// const links = [
// { href: '/', label: 'Route 1' },
// { href: '/', label: 'Route 2' },
// ];

export default function Header() {
return (
    <>

      <TopSocket />
      <header className=''>
        <div className="container flex flex-col items-center">
          <Logo width='500' height='160' alt='Secretariat Wedding Films' />
          <Nav />
        </div>

      </header>
{/* 

      <div class="header wf-section">
        <div class="sectionhomepageig">
          <div class="w-container">
            <div class="sectionhomepageig__div">
              <div class="sectionhomepageig__label">See our latest work and stories @secretariatvideo</div><a
                href="https://instagram.com/secretariatvideo" target="_blank"
                class="sectionhomepageig__link w-inline-block">
                  <img
                  src="https://assets.website-files.com/6244728a7aadaf6230add222/62f5a62c270e0c26cf078bb1_Instagram2.webp"
                  loading="lazy"
                  srcset="https://assets.website-files.com/6244728a7aadaf6230add222/62f5a62c270e0c26cf078bb1_Instagram2-p-500.webp 500w, https://assets.website-files.com/6244728a7aadaf6230add222/62f5a62c270e0c26cf078bb1_Instagram2-p-800.webp 800w, https://assets.website-files.com/6244728a7aadaf6230add222/62f5a62c270e0c26cf078bb1_Instagram2-p-1080.webp 1080w, https://assets.website-files.com/6244728a7aadaf6230add222/62f5a62c270e0c26cf078bb1_Instagram2.webp 1842w"
                  sizes="80px" alt="" class="sectionhomepageig__logo"></a>
            </div>
          </div>
        </div>
        <div class="header-div">
          <div class="logo-wrap"><img
              src="https://assets.website-files.com/6244728a7aadaf6230add222/62544508a1820f005d0b0df8_flourish.svg"
              loading="lazy" alt="" class="flourish">
            <div class="logo-text">Secretariat</div><img
              src="https://assets.website-files.com/6244728a7aadaf6230add222/62544508a1820f005d0b0df8_flourish.svg"
              loading="lazy" alt="" class="flourish">
          </div>
          <p class="smallcaps text-center fs12">Wedding Films</p>
        </div>
      </div> */}

    </>
)
}