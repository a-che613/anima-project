import { JSX } from "react";
import { Card, CardContent } from "../ui/card";

const farmingActivities = [
  {
    title: "Pig Farming",
    description: "Fattening and breeding of quality pigs",
    image: "/pig-farming.svg",
    icon: "/pig-farming-icon.svg",
  },
  {
    title: "Black Soldier Fly",
    description: "Production of larvae for animal feed",
    image: "/soldier-fly.svg",
    icon: "/soldier-fly-icon.svg",
  },
  {
    title: "Fish Farming",
    description: "Tilapia, catfish and red snapper",
    image: "/fish-farming.svg",
    icon: "/fish-farming-icon.svg",
  },
  {
    title: "Duck Farming",
    description: "Reproduction and meat production",
    image: "/duck-farming.svg",
    icon: "/duck-farming-icon.svg",
  },
  {
    title: "Rabbit Farming",
    description: "Rabbit farming for meat",
    image: "/rabbit-farming.svg",
    icon: "/rabbit-farming-icon.svg",
  },
  {
    title: "Crop Farming",
    description: "Large-scale maize and soybeans",
    image: "/crop-farming.svg",
    icon: "/crop-farming-icon.svg",
  },
];

export const FarmingActivitiesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-14 bg-[#2196531a]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-[#219653] text-[32px] font-bold [font-family:'Ubuntu',Helvetica] tracking-[0] leading-[47px] mb-6">
            What We Do
          </h2>
          <p className="max-w-[593px] font-bold text-[#202020] text-base leading-[30px] [font-family:'Ubuntu',Helvetica] tracking-[0]">
            Discover our diverse farming activities that work together in
            perfect harmony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmingActivities.map((activity, index) => (
            <Card
              key={index}
              className="relative h-[244px] bg-[#e0e6ed] rounded-[10px] overflow-hidden border-0 py-0"
            >
              <CardContent className="p-0 h-full relative ">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={activity.title}
                  src={activity.image}
                />
                <div className="absolute inset-0 bg-[#20202080]" />
                <img
                  className="absolute top-[31px] left-6 w-[38px] h-[38px] z-10"
                  alt="Icon"
                  src={activity.icon}
                />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start gap-[7px] z-10">
                  <h3 className="font-semibold text-white text-xl leading-[30px] [font-family:'Ubuntu',Helvetica] tracking-[0]">
                    {activity.title}
                  </h3>
                  <p className="font-medium text-white text-sm leading-[23px] [font-family:'Ubuntu',Helvetica] tracking-[0]">
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
