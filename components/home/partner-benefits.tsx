import { JSX } from "react";
import { Card, CardContent } from "../ui/card";

const benefits = [
  {
    icon: "/sf-icon.svg",
    alt: "Farm",
    title: "Sustainable Farming",
    description:
      "Integrated waste recycling system that turns farm waste into valuable resources",
  },
  {
    icon: "/qp-icon.svg",
    alt: "First place ribbon",
    title: "Quality Production",
    description:
      "Natural feeding and organic practices ensure the highest quality products",
  },
  {
    icon: "/lr-icon.svg",
    alt: "Place marker",
    title: "Local & Reliable",
    description:
      "Fresh products directly from our farm in Gawe – Bana to your table",
  },
];

export const PartnerBenefitsSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 max-w-[1438px] px-4">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="w-full max-w-[280px] sm:max-w-[330px] border-0 shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-center gap-3 sm:gap-3.5 p-0">
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-[29px]">
                <div className="inline-flex items-center justify-center gap-2.5 p-4 sm:p-5 bg-[#219653] rounded-[50px]">
                  <img
                    className="w-[24px] h-[24px] sm:w-[31px] sm:h-[31px]"
                    alt={benefit.alt}
                    src={benefit.icon}
                  />
                </div>
                <h3 className="font-['Ubuntu',Helvetica] font-medium text-[#202020] text-xl sm:text-2xl text-center tracking-[0] leading-[24px] sm:leading-[30px] px-2">
                  {benefit.title}
                </h3>
              </div>
              <p className="font-normal text-[#202020] text-xs sm:text-sm text-center leading-[20px] sm:leading-[30px] font-['Ubuntu',Helvetica] tracking-[0] px-2">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
