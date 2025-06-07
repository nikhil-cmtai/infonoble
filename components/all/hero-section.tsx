import React from "react";

const HeroSection = ({title, description}: {title: string, description: string}) => {
  return <div>
    <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))]">
                    {title}
                </h1>
                <p className="text-lg text-[hsl(var(--muted-foreground))]">
                    {description}
                </p>
            </div>
        </div>
    </div>
  </div>;
};

export default HeroSection;