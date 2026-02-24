"use client";

import { JSX } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[595px] bg-[#ede7e799] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="African man harvesting vegetables"
        src="/landing-image.svg"
      />

      <div className="absolute inset-0 bg-[#00000066]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-[32px] font-['Ubuntu',Helvetica] font-bold tracking-[0] leading-[38px] sm:leading-[42px] lg:leading-[47px] mb-4 sm:mb-6 lg:max-w-2xl px-4">
          {t('hero.title')}
        </h1>

        <p className="font-bold text-white text-sm sm:text-base text-center leading-[24px] sm:leading-[30px] font-['Ubuntu',Helvetica] tracking-[0] mb-6 sm:mb-8 lg:mb-10 lg:max-w-2xl px-4">
          {t('hero.subtitle')}
        </p>

        <div className="flex gap-3 sm:gap-4 lg:gap-5 flex-wrap justify-center px-4">
          <Button className="h-9 sm:h-10 px-4 sm:px-[7px] bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-sm sm:text-base tracking-[0] leading-[30px]">
            {t('hero.exploreFarm')}
          </Button>

          <Button
            variant="outline"
            className="h-9 sm:h-10 px-4 sm:px-[7px] rounded-xl border border-solid border-white bg-transparent hover:bg-white/10 font-['Ubuntu',Helvetica] font-bold text-white text-sm sm:text-base tracking-[0] leading-[30px]"
          >
            {t('hero.contactUs')}
          </Button>
        </div>
      </div>
    </section>
  );
};
