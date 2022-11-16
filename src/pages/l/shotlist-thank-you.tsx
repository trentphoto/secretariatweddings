import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import ButtonLink from "@/components/links/ButtonLink";
import Seo from "@/components/Seo";

export default function ShotListPage(){
  return(
    <>  
    <Layout>
      <Seo />
      <Header minimal />
      <main>
        <div className="py-16 px-4">
          <div className="container space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold">Oh yeah!</h1>
            <p>Your shot list is here! Click the button below to access it.</p>
            <ButtonLink href="https://res.cloudinary.com/dakfmjumy/image/upload/v1668548251/secretariatmedia/documents%20-%20public/shot-list_z7i1iu.pdf">Access it here.</ButtonLink>
          </div>
        </div>

      </main>

      <Footer />

    </Layout>


    </>
  )
}