import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, description, linkText, linkHref }) => {
  return (
    <section 
      className="px-4 pb-12 md:px-6"
      aria-labelledby="cta-section-title"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative border-l-4 border-primary pl-6 pr-6 before:content-[''] before:absolute before:left-[-4px] before:top-0 before:w-4 before:h-[4px] before:bg-primary after:content-[''] after:absolute after:left-[-4px] after:bottom-0 after:w-4 after:h-[4px] after:bg-primary">
          <div className="space-y-6">
            <h2 id="cta-section-title" className="text-3xl md:text-4xl font-bold">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href={linkHref}
                className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={linkText}
                title={linkText} 
              >
                {linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;