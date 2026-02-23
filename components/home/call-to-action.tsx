import { JSX } from "react";
import { Separator } from "../ui/separator";

const menuItems = [
  "Home",
  "About Us",
  "Our Activities",
  "Our Products",
  "Contact Us",
];

const coreServices = [
  "Pig Farming",
  "Black Soldier Fly",
  "Fish Farming",
  "Duck Farming",
  "Rabbit Farming",
  "Crop Farming",
];

const contactInfo = [
  { label: "Phone", value: "6xx-xxx-xxx" },
  { label: "Email", value: "xxx xxx xxx" },
];

const footerLinks = ["Privacy Policy", "Terms of Service", "Accessibility"];

export const CallToActionSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#350707] pb-16 pt-[150px] px-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1440px] mx-auto gap-[110px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              className="w-[83px] h-[83px] object-cover"
              alt="Ferme Intégrée Gawe Logo"
              src="/logo.svg"
            />
          </div>

          <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-[#219653] text-2xl leading-[47px]">
            Ferme Intégrée Gawe
          </h2>

          <p className="[font-family:'Roboto',Helvetica] font-bold text-white text-sm leading-8">
            A sustainable integrated farm in Gawe – Bana. Quality production,
            respect for the environment
          </p>

          <img
            className="w-[166px] h-9"
            alt="Social Media Icons"
            src="/frame-1000007561.svg"
          />
        </div>

        <nav className="flex flex-col gap-2">
          <h3 className="[font-family:'Ubuntu',Helvetica] font-bold text-white text-2xl leading-[30px] mb-2">
            Menu
          </h3>

          <ul className="flex flex-col gap-0 ml-[20px]">
            {menuItems.map((item, index) => (
              <li key={index} className="list-disc text-white">
                <a
                  href="#"
                  className="[font-family:'Ubuntu',Helvetica] font-medium  text-base leading-[30px] hover:text-[#219653] transition-colors "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2">
          <h3 className="[font-family:'Ubuntu',Helvetica] font-bold text-white text-2xl leading-[30px] mb-2">
            Core Services
          </h3>

          <ul className="flex flex-col gap-0 ml-[20px]">
            {coreServices.map((service, index) => (
              <li key={index} className="list-disc text-white">
                <span className="[font-family:'Ubuntu',Helvetica] font-medium text-base leading-[30px]">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-[#219653] text-2xl leading-[47px]">
            Contact
          </h3>

          <div className="flex flex-col gap-1 ">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-5">
                <span className="[font-family:'Roboto',Helvetica] font-bold text-[#219653] text-base leading-8 whitespace-nowrap">
                  {info.label}
                </span>
                <span className="[font-family:'Roboto',Helvetica] font-bold text-white text-base leading-8 whitespace-nowrap">
                  {info.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="[font-family:'Roboto',Helvetica] font-bold text-[#219653] text-base leading-8 whitespace-nowrap">
              Location
            </h4>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-white/20" />

      <div className="flex justify-center gap-8 max-w-[1440px] mx-auto">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="[font-family:'Ubuntu',Helvetica] font-bold text-white text-sm leading-[30px] hover:text-[#219653] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};
