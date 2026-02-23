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
    <section className="w-full flex justify-center py-12 px-10">
      <div className="flex flex-wrap items-center justify-center gap-12 max-w-[1438px] px-4">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="w-full max-w-[330px] border-0 shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-center gap-3.5 p-0">
              <div className="flex flex-col items-center justify-center gap-[29px]">
                <div className="inline-flex items-center justify-center gap-2.5 p-5 bg-[#219653] rounded-[50px]">
                  <img
                    className="w-[31px] h-[31px]"
                    alt={benefit.alt}
                    src={benefit.icon}
                  />
                </div>
                <h3 className="[font-family:'Ubuntu',Helvetica] font-medium text-[#202020] text-2xl text-center tracking-[0] leading-[30px]">
                  {benefit.title}
                </h3>
              </div>
              <p className="font-normal text-[#202020] text-sm text-center leading-[30px] [font-family:'Ubuntu',Helvetica] tracking-[0]">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
