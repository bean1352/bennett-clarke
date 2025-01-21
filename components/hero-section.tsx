import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="relative pt-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center max-w-3xl md:justify-start md:items-start md:text-start flex-col text-center">
          <div className="relative border-l-4 border-primary pl-6 before:content-[''] before:absolute before:left-[-4px] before:top-0 before:w-4 before:h-[4px] before:bg-primary after:content-[''] after:absolute after:left-[-4px] after:bottom-0 after:w-4 after:h-[4px] after:bg-primary">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-8 text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;