import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import OptinForm from '@/components/OptinForm';
import Seo from '@/components/Seo';

export default function ShotListPage() {
  return (
    <>
      <Layout>
        <Seo />
        <Header minimal />
        <main>
          <OptinForm
            imageUrl='/images/shotlist.jpeg'
            formName='lead-magnet-shotlist'
            buttonText='Get it Now'
            heading='Shot List: 5 Must-Have Video Shots on your Wedding Day'
            description='5 shots every bride should have their videographer be sure to capture on their special day.'
            smallcaps='Free Download'
            redirectUrl='/l/shotlist-thank-you'
          />
        </main>
      </Layout>
    </>
  );
}
