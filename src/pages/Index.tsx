import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Testimonials } from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Index;
