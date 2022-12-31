import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function AuthorBox() {
  return (
    <>
      <div className='mt-24 flex flex-col space-y-8 rounded-xl bg-gray-100 p-6 sm:flex-row sm:space-x-8 sm:space-y-0 sm:p-12'>
        <div className='flex'>
          <div className='h-40 w-40 overflow-hidden rounded-full'>
            <NextImage
              alt='James Trent'
              src='https://res.cloudinary.com/dakfmjumy/image/upload/v1672457042/secretariatmedia/j_anei7p.svg'
              width={160}
              height={160}
            />
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <div className='smallcaps'>About the Author</div>
          <h4 className='text-4xl'>James Trent</h4>
          <p>
            With over 10 years experience in cinematic wedding video production,
            James has a passion for capturing moments and creating an artistic,
            meaningful final product.
          </p>
        </div>
      </div>
    </>
  );
}
