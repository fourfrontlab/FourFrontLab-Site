'use client';
import Link from 'next/link';
import { Check } from 'lucide-react';
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
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#F0F1F3]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-space text-[#1A1A1A] tracking-tight mb-6">
            Simple, scalable engagements.
          </h2>
          <p className="text-[#5A5A5A] text-xl font-inter max-w-2xl mx-auto">
            Choose the tier that fits your project's scope. We'll work with you to define the exact requirements and provide a transparent quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`tier-card flex flex-col p-8 rounded-sm border ${tier.highlighted ? 'border-[#0E5C8C] bg-white shadow-lg relative transform md:-translate-y-4' : 'border-[#E0E2E5] bg-[#FAFAFA] hover:border-[#0E5C8C]/30'}`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0E5C8C] text-white px-4 py-1 text-xs font-mono uppercase tracking-widest rounded-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-space font-bold text-[#1A1A1A] mb-2">{tier.name}</h3>
              <p className="text-[#5A5A5A] text-sm mb-6 h-10">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#1A1A1A] tracking-tighter">{tier.price}</span>
              </div>
              
              <Link 
                href="/contact" 
                className={`w-full py-3 text-center rounded-sm font-medium transition-all mb-8 ${tier.highlighted ? 'bg-[#0E5C8C] text-white hover:bg-[#2BA9D1]' : 'bg-transparent border border-[#0E5C8C] text-[#0E5C8C] hover:bg-[#0E5C8C] hover:text-white'}`}
              >
                Get Started
              </Link>

              <div className="flex-grow">
                <span className="block text-xs font-mono text-[#5A5A5A] uppercase tracking-widest mb-4">Includes:</span>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#2BA9D1] shrink-0" />
                      <span className="text-[#1A1A1A] text-sm">{feature}</span>
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
