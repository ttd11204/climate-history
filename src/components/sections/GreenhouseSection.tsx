import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAPScroll } from '@/hooks/useGSAPScroll';

const GreenhouseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { createStorySection, createFadeIn } = useGSAPScroll();
  
  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;
    
    // Create animations
    createStorySection(sectionRef.current, {
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    });
    
    createFadeIn(textRef.current, {
      trigger: sectionRef.current,
      start: "top 70%"
    });
    
    createFadeIn(imageRef.current, {
      trigger: sectionRef.current,
      start: "top 60%"
    });
  }, [createStorySection, createFadeIn]);
  
  return (
    <section ref={sectionRef} className="relative py-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <h2 className="text-[12vw] font-serif uppercase leading-none whitespace-nowrap">
            THE GREENHOUSE
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div ref={textRef} className="space-y-6">
            <div className="mb-12">
              <span className="inline-block text-sm font-light mr-2">1760</span>
              <span className="inline-block text-sm font-light">1850</span>
              <h3 className="text-2xl font-serif mt-2">Joseph Fourier</h3>
            </div>
            
            <p className="text-lg font-light leading-relaxed">
              In the early 19th century, French mathematician and physicist Joseph Fourier proposed that energy reaching the planet as sunlight must be balanced by energy returning to space since heated surfaces emit radiation.
            </p>
            
            <p className="text-base font-light leading-relaxed opacity-70">
              But some of that energy, he discovered, was trapped by the atmosphere within the atmosphere and not return to space, keeping Earth warm.
            </p>
            
            <p className="text-base font-light leading-relaxed mt-8">
              He proposed that Earth's thin covering of air—its atmosphere—acts like a giant greenhouse, allowing sunlight to warm the planet but preventing heat from escaping back into space, much like a greenhouse.
            </p>
          </div>
          
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/images/clouds.jpg"
                alt="Atmospheric clouds"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className="absolute -bottom-16 -left-16 w-32 h-32">
              <Image
                src="/images/cloud-detail.jpg"
                alt="Cloud detail"
                width={128}
                height={128}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 max-w-3xl mx-auto">
          <p className="text-center text-base font-light leading-relaxed opacity-70">
            Experts have since pointed out that the greenhouse analogy was an oversimplification, since insulating gases actually work by absorbing and re-emitting thermal radiation that would otherwise escape Earth's atmosphere but absorbed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GreenhouseSection;