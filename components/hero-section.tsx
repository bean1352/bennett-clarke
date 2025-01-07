import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center max-w-3xl md:justify-start md:items-start md:text-start flex-col text-center">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;