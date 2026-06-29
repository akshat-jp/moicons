import { FeaturedSection } from "@/components/featuredsection";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  
  return (
    // <div className="relative min-h-screen w-full overflow-x-hidden">
    //   {/* Background */}
    //   <div
    //     className="absolute inset-0 -z-10"
    //     style={{
    //       background:
    //         "radial-gradient(125% 125% at 50% 90%, #fff 40%, #434343 100%)",
    //     }}
    //   />

    //   {/* Content */}
    //   <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
    //     <Header />
    //     <Hero />
    //   </div>
    // </div>

    <div className="min-h-screen w-full relative">
  {/* Dashed Top Fade Grid */}
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
        
        <Hero />
        
        <FeaturedSection />

        </div>
</div>
  );
}



