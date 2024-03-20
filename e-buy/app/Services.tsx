"use client";

import { CardHoverEffectSnippet } from "./Accernity/CardHoverSnippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Optimize your business operations with our services.
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        We provide an extensive array of services, from website design to social
        media management, aimed at facilitating the growth of your business.
      </p>

      <CardHoverEffectSnippet />
    </div>
  );
};

export default Services;
