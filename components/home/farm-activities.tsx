"use client";

import { JSX } from "react";
import { Card, CardContent } from "../ui/card";
import { useTranslation } from "react-i18next";

export const FarmingActivitiesSection = (): JSX.Element => {
  const { t } = useTranslation();

  const farmingActivities = [
    {
      title: t('activities.pigFarming'),
      description: t('activities.pigFarmingDesc'),
      image: "/pig-farming.svg",
      icon: "/pig-farming-icon.svg",
    },
    {
      title: t('activities.blackSoldierFly'),
      description: t('activities.blackSoldierFlyDesc'),
      image: "/soldier-fly.svg",
      icon: "/soldier-fly-icon.svg",
    },
    {
      title: t('activities.fishFarming'),
      description: t('activities.fishFarmingDesc'),
      image: "/fish-farming.svg",
      icon: "/fish-farming-icon.svg",
    },
    {
      title: t('activities.duckFarming'),
      description: t('activities.duckFarmingDesc'),
      image: "/duck-farming.svg",
      icon: "/duck-farming-icon.svg",
    },
    {
      title: t('activities.rabbitFarming'),
      description: t('activities.rabbitFarmingDesc'),
      image: "/rabbit-farming.svg",
      icon: "/rabbit-farming-icon.svg",
    },
    {
      title: t('activities.cropFarming'),
      description: t('activities.cropFarmingDesc'),
      image: "/crop-farming.svg",
      icon: "/crop-farming-icon.svg",
    },
  ];
  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-14 bg-[#2196531a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <h2 className="text-[#219653] text-2xl sm:text-3xl lg:text-[32px] font-bold font-['Ubuntu',Helvetica] tracking-[0] leading-[32px] sm:leading-[40px] lg:leading-[47px] mb-4 sm:mb-6 px-4">
            {t('activities.title')}
          </h2>
          <p className="max-w-full sm:max-w-[593px] font-bold text-[#202020] text-sm sm:text-base leading-[24px] sm:leading-[30px] font-['Ubuntu',Helvetica] tracking-[0] px-4">
            {t('activities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {farmingActivities.map((activity, index) => (
            <Card
              key={index}
              className="relative h-[200px] sm:h-[220px] lg:h-[244px] bg-[#e0e6ed] rounded-[10px] overflow-hidden border-0 py-0"
            >
              <CardContent className="p-0 h-full relative ">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={activity.title}
                  src={activity.image}
                />
                <div className="absolute inset-0 bg-[#20202080]" />
                <img
                  className="absolute top-4 sm:top-[31px] left-4 sm:left-6 w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] z-10"
                  alt="Icon"
                  src={activity.icon}
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col items-start gap-2 sm:gap-[7px] z-10">
                  <h3 className="font-semibold text-white text-lg sm:text-xl leading-[24px] sm:leading-[30px] font-['Ubuntu',Helvetica] tracking-[0]">
                    {activity.title}
                  </h3>
                  <p className="font-medium text-white text-xs sm:text-sm leading-[20px] sm:leading-[23px] font-['Ubuntu',Helvetica] tracking-[0]">
                    {activity.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
