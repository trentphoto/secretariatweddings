import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";

export default function DefaultThankYouPage(){
  return(
    <>
    <Layout>
      <Header minimal />
      <main>
        <div className="py-16 px-4 container max-w-3xl space-y-4">
          <h1>Thank you!</h1>
          <p>We've received your submission and will be in touch shortly.</p>
          
        </div>
      </main>

      <Footer />
    </Layout>
    </>
  )
}