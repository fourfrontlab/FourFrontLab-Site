'use client';
import Link from 'next/link';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "Starter",
    description: "Best for single-page sites and MVPs.",
    price: "Custom Quote",
    features: [
      "Landing page or single-page app",
      "Responsive design",
      "Basic SEO optimization",
      "Standard animations",
      "1 revision round"
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "Best for full web apps with a backend.",
    price: "Custom Quote",
    features: [
      "Multi-page application",
      "Custom backend & database",
      "User authentication",
      "Advanced animations & GSAP",
      "Priority support during build"
    ],
    highlighted: true,
  },
  {
    name: "Custom",
    description: "Best for enterprise and complex systems.",
    price: "Custom Quote",
    features: [
      "Complex system architecture",
      "Third-party API integrations",
      "Scalable cloud infrastructure",
      "Dedicated project manager",
      "Ongoing maintenance option"
    ],
    highlighted: false,
  }
];

export default function PricingTiers() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.tier-card', 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 relative">
          <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase">SEC. 06 // PACKAGES</span>
          <h2 className="text-5xl md:text-7xl font-bold font-inter text-[#151515] tracking-tight mb-6">
            Simple, scalable engagements.
          </h2>
          <p className="text-[#5C5C5C] text-xl font-medium max-w-2xl mx-auto">
            Choose the tier that fits your project's scope. We'll work with you to define the exact requirements and provide a transparent quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`tier-card flex flex-col p-8 rounded-none border ${tier.highlighted ? 'border-[#151515] bg-[#FAFAF8] relative transform md:-translate-y-4 corner-ticks shadow-[4px_4px_0_0_#1B3A5C]' : 'border-[#151515] bg-[#FAFAF8] hover:border-[#1B3A5C] transition-colors'}`}
            >
              {tier.highlighted && (
                <div className="absolute -top-[12px] left-1/2 transform -translate-x-1/2 bg-[#151515] text-[#FAFAF8] px-4 py-1 text-xs font-mono uppercase tracking-widest rounded-none border border-[#151515]">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-3xl font-inter font-bold text-[#151515] mb-2 dimension-line pb-2">{tier.name}</h3>
              <p className="text-[#5C5C5C] text-sm mb-6 h-10 mt-4">{tier.description}</p>
              
              <div className="mb-8 border-t border-[#151515] pt-4">
                <span className="text-3xl font-bold text-[#151515] tracking-tighter">{tier.price}</span>
              </div>
              
              <Link 
                href="/contact" 
                className={`w-full py-3 text-center rounded-none font-mono font-bold tracking-widest uppercase text-sm transition-all mb-8 ${tier.highlighted ? 'bg-[#151515] text-white hover:bg-[#1B3A5C]' : 'bg-transparent border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white'}`}
              >
                Get Started
              </Link>

              <div className="flex-grow">
                <span className="block text-xs font-mono text-[#151515] uppercase tracking-widest mb-4 border-b border-[#151515] pb-2">Includes:</span>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#1B3A5C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#151515] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
