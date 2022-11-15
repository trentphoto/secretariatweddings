

import Script from "next/script"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Layout from "@/components/layout/Layout"
import Seo from "@/components/Seo"

export default function ContactPage(){
  
  return (
    <Layout>
      <Seo />
      <Header />
      <main>

        <section className="py-24">
          <div className="container">
            <p className="text-lg text-center mb-12 md:mb-0">Ready to talk? Let's schedule a discovery call to get to know you and what you're looking for.</p>
            <div className="calendly-inline-widget" data-url="https://calendly.com/secretariatmedia/30min" style={{
              minWidth: '320px',
              height: '880px'
          }}></div>
          </div>
        </section>

        <section>
          <div className="container max-w-xl">
            <h2 className="text-5xl">Contact Us</h2>
            <p className="text-lg mb-4">You can use the form below to get in touch with us.</p>
            <form 
              className="flex flex-col items-stretch w-sm space-y-4" 
              name="contact" 
              id="contact"
              action="/thank-you" 
              method="POST" 
              netlify
            >
              <input className="border border-gray-500 p-2 px-3" type="text" name="name" id="name" placeholder="Name" required />
              <input className="border border-gray-500 p-2 px-3" type="email" name="email" id="email" placeholder="Email Address" required />
              <input className="border border-gray-500 p-2 px-3" type="tel" name="phone" id="phone" placeholder="Phone Number" required />
              <textarea className="border border-gray-500 p-2 px-3" name="message" id="message" placeholder="Additional Details (Optional)" />
              <button className="px-8 py-3 text-sm font-light uppercase tracking-wide bg-gray-700 text-white border border-gray-600 rounded-none font-sans hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-500" type="submit" form="contact">Submit</button>
            
            </form>
          </div>
        </section>
        
      </main>
      <Footer />
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </Layout>
  )
}
