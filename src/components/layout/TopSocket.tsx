import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

import InstagramLogo from '~/images/instagram.webp';

export default function TopSocket() {
  return (
    <div className='bg-gray-50 p-2 text-sm'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center space-x-2'>
          <span>See our latest work and stories @secretariatvideo</span>
          <ButtonLink
            variant='light'
            className='relative rounded-md p-3 transition-colors hover:bg-gray-200'
            href='https://instagram.com/secretariatvideo'
          >
            <NextImage
              useSkeleton
              width={80}
              height={22}
              className=''
              src={InstagramLogo}
              alt='instagram logo'
            />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
