import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Layout from "@/components/layout/Layout"
import ButtonLink from "@/components/links/ButtonLink"
import NextImage from "@/components/NextImage"
import Seo from "@/components/Seo"

import Dress from '~/images/dress.jpeg'
import Review1 from '~/images/reviews/davin-elisha.jpg'
import Review2 from '~/images/reviews/doug-anna.jpg'
import Review3 from '~/images/reviews/image-3.jpg'
import Review4 from '~/images/reviews/matthew-ayana.jpg'

export default function ReviewsPage(){
  return (
    <Layout>
      <Seo />
      <Header />
      <main>

        <div className="section relative">
          <div className="-z-10 absolute top-0 left-0 bottom-0 right-0 bg-black opacity-25"></div>
          <div className="-z-20 absolute top-0 left-0 bottom-0 right-0">
            <NextImage 
              src={Dress}
              alt="bridal dress"
              layout="fill"
              style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
              }}
            />
          </div>
          <div className="z-20 container py-32 text-center">
            <h1 className="text-6xl font-test uppercase text-white mb-8">Over 25 Love Stories In 2022</h1>
            <ButtonLink className="font-bold" href="/contact">Book Us Today</ButtonLink>
          </div>
        </div>

        <section className="py-32">
          <div className="container">
            <h1 className='text-center mb-12 max-w-2xl mx-auto mt-12 font-derivia text-3xl font-bold uppercase tracking-wide'>
              See What Couples Are Saying About Their Experience
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12 flex flex-col items-start border border-gray-800">
                <NextImage className="w-full mb-6" src={Review1} width="400" height="250" alt="Elisa + Davin" />
                <div className="p-4">
                  <p className="mb-4">Truly a captivating experience. We just want to thank you so much for being with us on our special day - we had so much fun!</p>
                  <p className="font-bold">Elisha + Davin</p>
                  <p className="italic">Elisha + Davin</p>
                </div>
              </div>

              <div className="p-12 flex flex-col items-start border border-gray-800">
                <NextImage className="w-full mb-6" src={Review2} width="400" height="250" alt="Elisa + Davin" />
                <div className="p-4">
                  <p className="mb-4">Truly a captivating experience. We just want to thank you so much for being with us on our special day - we had so much fun!</p>
                  <p className="font-bold">Elisha + Davin</p>
                  <p className="italic">Elisha + Davin</p>
                </div>
              </div>
              
              <div className="p-12 flex flex-col items-start border border-gray-800">
                <NextImage className="w-full mb-6" src={Review3} width="400" height="250" alt="Elisa + Davin" />
                <div className="p-4">
                  <p className="mb-4">Truly a captivating experience. We just want to thank you so much for being with us on our special day - we had so much fun!</p>
                  <p className="font-bold">Elisha + Davin</p>
                  <p className="italic">Elisha + Davin</p>
                </div>
              </div>
              
              <div className="p-12 flex flex-col items-start border border-gray-800">
                <NextImage className="w-full mb-6" src={Review4} width="400" height="250" alt="Elisa + Davin" />
                <div className="p-4">
                  <p className="mb-4">Truly a captivating experience. We just want to thank you so much for being with us on our special day - we had so much fun!</p>
                  <p className="font-bold">Elisha + Davin</p>
                  <p className="italic">Elisha + Davin</p>
                </div>
              </div>
              

            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </Layout>
  )
}
