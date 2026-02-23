import { CallToActionSection } from "@/components/home/call-to-action";
import { FarmingActivitiesSection } from "@/components/home/farm-activities";
import { HeroSection } from "@/components/home/hero-section";
import { OurStorySection } from "@/components/home/our-story";
import { PartnerBenefitsSection } from "@/components/home/partner-benefits";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

const Home = () => {
  return (
    <div className="bg-[#fcfcf7] overflow-hidden w-full relative">
      {/* <HeaderSection /> */}

      <HeroSection />

      <OurStorySection />

      <FarmingActivitiesSection />

      <PartnerBenefitsSection />

      <div className="relative lg:bottom-[-150px] lg:mt-[-150px] z-10 max-lg:bg-[#E6F2E7]">
        <img
          className="w-full h-full object-cover z-10 max-lg:hidden"
          alt="African man harvesting vegetables"
          src="/get-in-touch-bg.svg"
        />
        <div className="px-4 sm:px-6 lg:px-10 w-full max-w-[1438px] mx-auto justify-center flex flex-col items-center z-100 lg:absolute max-lg:py-[50px] inset-0 gap-6 sm:gap-[36px]">
          <div className="flex flex-col items-center gap-4 sm:gap-[22px]">
            <h2 className="text-2xl sm:text-[32px] font-bold text-[#219653] text-center px-4">Need Fresh, Sustainable Products?</h2>
            <p className="text-sm sm:text-[15px] font-normal text-[#202020] text-center px-4">Contact us today to place your order.</p>
          </div>
          <Button className="h-9 sm:h-10 px-6 sm:px-[7px] bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-sm sm:text-[14px] tracking-[0] leading-[30px] whitespace-nowrap sm:px-[31px]">
            Get in Touch Today
          </Button>
        </div>
      </div>

      <CallToActionSection />
    </div>
  );
};

export default Home;
