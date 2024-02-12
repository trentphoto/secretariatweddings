import NextImage from '@/components/NextImage';

interface OptinFormProps {
  formName: string;
  heading: string;
  description?: string;
  buttonText?: string;
  imageUrl: string;
  redirectUrl?: string;
  smallcaps?: string;
}

export default function OptinForm({
  formName,
  heading,
  description,
  smallcaps,
  buttonText,
  imageUrl,
  redirectUrl,
}: OptinFormProps) {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='mx-auto flex flex-col items-start rounded-lg bg-white p-12 shadow-xl md:flex-row md:items-stretch md:space-x-16'>
          <div className='flex w-80 flex-col items-start space-y-4'>
            {smallcaps ? <p className='smallcaps'>{smallcaps}</p> : ''}

            <h2 className='mb-0'>{heading}</h2>

            {description ? <p>{description}</p> : ''}

            <form
              className='mt-12 flex w-full flex-col items-stretch space-y-4'
              name={formName}
              id={formName}
              action={redirectUrl ? redirectUrl : '/thank-you'}
              netlify
            >
              <input
                className='form-control border border-gray-500 p-2 px-3'
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                required
              />
              <input
                className='form-control border border-gray-500 p-2 px-3'
                type='email'
                name='email'
                id='email'
                placeholder='Email Address'
                required
              />
              <button
                className='rounded-none border border-gray-600 bg-gray-700 px-8 py-3 font-sans text-sm font-light uppercase tracking-wide text-white hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-500'
                form={formName}
              >
                {buttonText ? buttonText : 'submit'}
              </button>
            </form>
          </div>

          {/* rightside */}
          <div className='block aspect-square	overflow-hidden rounded'>
            <div className='p-6'>
              <div className='relative aspect-square w-full max-w-md'>
                <NextImage
                  src={imageUrl}
                  alt=''
                  width='400'
                  height='400'
                  className='block aspect-square h-full w-full overflow-hidden rounded object-cover shadow	'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
