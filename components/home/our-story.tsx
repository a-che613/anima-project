"use client";

import { JSX } from "react";
import { useTranslation } from "react-i18next";

export const OurStorySection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center py-8 sm:py-12 lg:py-15 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1438px] grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[110px] items-center">
        <div className="flex flex-col gap-4 sm:gap-[20px] order-2 lg:order-1">
          <div className="flex flex-col gap-2 sm:gap-[7px] pt-4 sm:pt-[20px]">
            <h3 className="text-[#219653] font-bold text-[12px] sm:text-[14px]">{t('story.label')}</h3>
            <h2 className="max-w-full lg:max-w-[467px] text-2xl sm:text-3xl lg:text-[32px] font-['Ubuntu',Helvetica] font-bold tracking-[0] leading-[32px] sm:leading-[40px] lg:leading-[47px]">
              {t('story.title')}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#202020] leading-relaxed">
            {t('story.description')}
          </p>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            className="w-full max-w-[500px] lg:max-w-[620px] h-auto lg:h-auto lg:max-h-[383px] object-cover rounded-lg"
            alt="Ferme Intégrée Gawe Logo"
            src="/cattle-rearers.svg"
          />
        </div>
      </div>
    </section>
  );
};
