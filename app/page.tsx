"use client"

import { FeaturedSection } from "@/components/featuredsection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {

    const scrollToComponents = () => {
    document.getElementById('icons')?.scrollIntoView({ behavior: 'smooth' });

    };
  
  return (
    
    // bg from @patterncraft <3    

    <div className="min-h-screen w-full relative">
  
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
  <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">

        <Header />
        
        <Hero onBrowse={scrollToComponents} />
        
        <FeaturedSection />

        <Footer />

    </div>
</div>
  );
}



