import { JSX } from "react";
import { Button } from "../ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[595px] bg-[#ede7e799] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="African man harvesting vegetables"
        src="/landing-image.svg"
      />

      <div className="absolute inset-0 bg-[#00000066]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-[32px] [font-family:'Ubuntu',Helvetica] font-bold tracking-[0] leading-[47px] mb-6 lg:max-w-1/2">
          Integrated Farm in Gawe – Bana
        </h1>

        <p className="font-bold text-white text-base text-center leading-[30px] [font-family:'Ubuntu',Helvetica] tracking-[0] mb-10 lg:max-w-1/2">
          A sustainable approach to agriculture combining livestock farming,
          fish farming and crops for quality production in Cameroon.
        </p>

        <div className="flex gap-5 flex-wrap justify-center">
          <Button className="h-10 px-[7px] bg-[#219653] hover:bg-[#1a7a42] rounded-xl [font-family:'Ubuntu',Helvetica] font-bold text-white text-base tracking-[0] leading-[30px]">
            Explore our farm
          </Button>

          <Button
            variant="outline"
            className="h-10 px-[7px] rounded-xl border border-solid border-white bg-transparent hover:bg-white/10 [font-family:'Ubuntu',Helvetica] font-bold text-white text-base tracking-[0] leading-[30px]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
