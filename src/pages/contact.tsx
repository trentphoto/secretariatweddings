import Script from 'next/script';

import ContactForm from '@/components/ContactForm';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactPage() {
  return (
    <Layout>
      <Seo />
      <Header />
      <main>
        <section className='p-2 py-24'>
          <div className='container'>
            <p className='mb-12 text-center text-lg md:mb-0'>
              Ready to talk? Let's schedule a discovery call to get to know you
              and what you're looking for.
            </p>
            <div
              className='calendly-inline-widget'
              data-url='https://calendly.com/secretariatmedia/30min'
              style={{
                minWidth: '320px',
                height: '880px',
              }}
            ></div>
          </div>
        </section>

        <section>
          <div className='container max-w-xl p-4'>
            <h2 className='text-5xl'>Contact Us</h2>
            <p className='mb-4 text-lg'>
              You can use the form below to get in touch with us.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <Script src='https://assets.calendly.com/assets/external/widget.js' />
    </Layout>
  );
}
