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
    <section className="px-4 pb-12 md:px-6">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {title}
        </h2>
        <p className="text-lg">
          {description}
        </p>
        <div className="flex justify-center gap-4">
          <Link href={linkHref} className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors" aria-label={linkText}>
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;