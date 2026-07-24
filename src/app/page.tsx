import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Advantages } from '@/components/advantages';
import { Qualifications } from '@/components/qualifications';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import FloatingSidebar from '@/components/floating-sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Qualifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingSidebar />
    </>
  );
}
