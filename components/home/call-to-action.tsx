"use client";

import { JSX } from "react";
import { Separator } from "../ui/separator";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export const CallToActionSection = (): JSX.Element => {
  const { t } = useTranslation();

  const menuItems = [
    t('footer.menu.home'),
    t('footer.menu.about'),
    t('footer.menu.activities'),
    t('footer.menu.products'),
    t('footer.menu.contact'),
  ];

  const coreServices = [
    t('footer.services.pigFarming'),
    t('footer.services.blackSoldierFly'),
    t('footer.services.fishFarming'),
    t('footer.services.duckFarming'),
    t('footer.services.rabbitFarming'),
    t('footer.services.cropFarming'),
  ];

  const contactInfo = [
    { label: t('footer.contact.phone'), value: t('footer.contact.phoneValue') },
    { label: t('footer.contact.email'), value: t('footer.contact.emailValue') },
  ];

  const footerLinks = [
    t('footer.links.privacy'),
    t('footer.links.terms'),
    t('footer.links.accessibility'),
  ];
  return (
    <footer className="relative w-full bg-[#350707] pb-8 sm:pb-12 lg:pb-16 pt-12 sm:pt-20 lg:pt-[150px] px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-6 sm:gap-8 lg:gap-[110px]">
        <div className="flex flex-col gap-4 sm:gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              className="w-[60px] h-[60px] sm:w-[83px] sm:h-[83px] object-cover"
              alt="Ferme Intégrée Gawe Logo"
              src="/logo.svg"
            />
          </div>

          <h2 className="font-['Ubuntu',Helvetica] font-bold text-[#219653] text-xl sm:text-2xl leading-[32px] sm:leading-[47px]">
            Ferme Intégrée Gawe
          </h2>

          <p className="font-['Roboto',Helvetica] font-bold text-white text-xs sm:text-sm leading-6 sm:leading-8">
            {t('footer.description')}
          </p>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white">
              <FaLinkedinIn className="text-[#350707] w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white">
              <FaInstagram className="text-[#350707] w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white">
              <FaFacebookF className="text-[#350707] w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="font-['Ubuntu',Helvetica] font-bold text-white text-lg sm:text-2xl leading-[24px] sm:leading-[30px] mb-2">
            {t('footer.menu.title')}
          </h3>

          <ul className="flex flex-col gap-0 ml-4 sm:ml-[20px]">
            {menuItems.map((item, index) => (
              <li key={index} className="list-disc text-white">
                <a
                  href="#"
                  className="font-['Ubuntu',Helvetica] font-medium text-sm sm:text-base leading-[24px] sm:leading-[30px] hover:text-[#219653] transition-colors "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="font-['Ubuntu',Helvetica] font-bold text-white text-lg sm:text-2xl leading-[24px] sm:leading-[30px] mb-2">
            {t('footer.services.title')}
          </h3>

          <ul className="flex flex-col gap-0 ml-4 sm:ml-[20px]">
            {coreServices.map((service, index) => (
              <li key={index} className="list-disc text-white">
                <span className="font-['Ubuntu',Helvetica] font-medium text-sm sm:text-base leading-[24px] sm:leading-[30px]">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="font-['Open_Sans',Helvetica] font-bold text-[#219653] text-lg sm:text-2xl leading-[32px] sm:leading-[47px]">
            {t('footer.contact.title')}
          </h3>

          <div className="flex flex-col gap-1">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-5">
                <span className="font-['Roboto',Helvetica] font-bold text-[#219653] text-sm sm:text-base leading-6 sm:leading-8 whitespace-nowrap">
                  {info.label}
                </span>
                <span className="font-['Roboto',Helvetica] font-bold text-white text-sm sm:text-base leading-6 sm:leading-8 whitespace-nowrap">
                  {info.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="font-['Roboto',Helvetica] font-bold text-[#219653] text-sm sm:text-base leading-6 sm:leading-8 whitespace-nowrap">
              {t('footer.location.title')}
            </h4>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-white/20" />

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-[1440px] mx-auto px-4">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-['Ubuntu',Helvetica] font-bold text-white text-xs sm:text-sm leading-[20px] sm:leading-[30px] hover:text-[#219653] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};
