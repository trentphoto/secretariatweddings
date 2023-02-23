export default function ContactForm() {
  return (
    <form
      className='w-sm flex flex-col items-stretch space-y-4'
      name='contactForm'
      id='contactForm'
      action='/thank-you'
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contactForm' />

      <input
        className='border border-gray-500 p-2 px-3'
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        required
      />
      <input
        className='border border-gray-500 p-2 px-3'
        type='email'
        name='email'
        id='email'
        placeholder='Email Address'
        required
      />
      <input
        className='border border-gray-500 p-2 px-3'
        type='tel'
        name='phone'
        id='phone'
        placeholder='Phone Number'
        required
      />
      <textarea
        className='border border-gray-500 p-2 px-3'
        name='message'
        id='message'
        placeholder='Additional Details (Optional)'
      />
      <button
        className='rounded-none border border-gray-600 bg-gray-700 px-8 py-3 font-sans text-sm font-light uppercase tracking-wide text-white hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-500'
        type='submit'
        form='contactForm'
      >
        Submit
      </button>
    </form>
  );
}
