import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const navigationItems = [
  { label: "Home", isActive: true },
  { label: "About", isActive: false },
  { label: "Our Activities", isActive: false },
  { label: "Our Product", isActive: false },
  { label: "Contact Us", isActive: false },
];

const NavBar = () => {
  return (
    <header className="relative w-full bg-white">
      <div className="flex items-center justify-between px-10 py-4 max-w-[1438px] mx-auto">
        <div className="flex items-center gap-4">
          <img
            className="w-[41px] h-[41px] object-cover"
            alt="Ferme Intégrée Gawe Logo"
            src="/logo.svg"
          />
          <h1 className="text-[#333333] text-base [font-family:'Ubuntu',Helvetica] font-bold tracking-[0] leading-[47px] whitespace-nowrap">
            Ferme Intégrée Gawe
          </h1>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[38px]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`${
                    item.isActive
                      ? "inline-flex items-center justify-center gap-2.5 px-[15px] py-1 bg-[#219653] rounded-[20px] text-white"
                      : "text-[#202020]"
                  } [font-family:'Ubuntu',Helvetica] font-normal text-[15px] tracking-[0] leading-8 whitespace-nowrap cursor-pointer`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-[22px]">
          <div className="w-[41px] h-[41px] rounded-[10px] border border-black/70 flex items-center justify-center">
            <img
              className="w-[20px] h-[20px]"
              alt="Language selector"
              src="/us-flag.svg"
            />
          </div>
          <Button className="h-10 px-[7px] bg-[#219653] hover:bg-[#1a7a42] rounded-xl [font-family:'Ubuntu',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[30px] whitespace-nowrap px-[31px]">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
