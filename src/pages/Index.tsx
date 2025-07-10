import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import MiniProjects from '@/components/MiniProjects';
import Portfolio from '@/components/Portfolio';

const Index = () => {
  return (
    <Layout showAnimatedBackground showHeader={false}>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <MiniProjects />
        <Portfolio />
      </main>
    </Layout>
  );
};

export default Index;
