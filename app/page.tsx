import Hero from '@/components/hero';
import Tech from '@/components/tech';
import Header from '@/layout/header';
/* import Projects from '@/components/Projects'; */
/* import Contact from '@/components/Contact'; */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Projects /> */}
        <Tech />
      </main>
      {/* <Contact /> */}
    </>
  );
}
