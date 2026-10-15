import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Tech from '@/components/tech';
import Header from '@/layout/header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Tech />
      </main>
      <Contact />
    </>
  );
}
