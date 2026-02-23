import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

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
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 max-w-[1438px] mx-auto">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            className="w-8 h-8 sm:w-[41px] sm:h-[41px] object-cover"
            alt="Ferme Intégrée Gawe Logo"
            src="/logo.svg"
          />
          <h1 className="text-[#333333] text-sm sm:text-base font-['Ubuntu',Helvetica] font-bold tracking-[0] leading-6 sm:leading-[47px] whitespace-nowrap">
            Ferme Intégrée Gawe
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[22px]">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4 lg:gap-[38px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`${
                      item.isActive
                        ? "inline-flex items-center justify-center gap-2.5 px-[15px] py-1 bg-[#219653] rounded-[20px] text-white"
                        : "text-[#202020]"
                    } font-['Ubuntu',Helvetica] font-normal text-[13px] sm:text-[15px] tracking-[0] leading-8 whitespace-nowrap cursor-pointer`}
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
            <Button className="h-9 sm:h-10 px-4 sm:px-[7px] bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[12px] sm:text-[14px] tracking-[0] leading-[30px] whitespace-nowrap sm:px-[31px]">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center gap-[22px]">
          <div className="flex items-center gap-3">
            {navigationItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={`
                  ${
                    item.isActive
                      ? "inline-flex items-center justify-center gap-2.5 px-3 py-1 bg-[#219653] rounded-[20px] text-white"
                      : "text-[#202020]"
                  } font-['Ubuntu',Helvetica] font-normal text-[13px] tracking-[0] leading-8 whitespace-nowrap cursor-pointer
                `}
              >
                {item.label}
              </div>
            ))}
          </div>
          <Button className="h-9 px-3 bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[12px] tracking-[0] leading-[30px] whitespace-nowrap">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-6">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      item.isActive
                        ? "inline-flex items-center justify-center gap-2.5 px-[15px] py-3 bg-[#219653] rounded-[20px] text-white"
                        : "text-[#202020]"
                    } font-['Ubuntu',Helvetica] font-normal text-[14px] sm:text-[15px] tracking-[0] leading-8 whitespace-nowrap cursor-pointer`}
                  >
                    {item.label}
                  </div>
                ))}
                
                <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <div className="w-[41px] h-[41px] rounded-[10px] border border-black/70 flex items-center justify-center">
                      <img
                        className="w-[20px] h-[20px]"
                        alt="Language selector"
                        src="/us-flag.svg"
                      />
                    </div>
                    <span className="text-[#202020]">Language</span>
                  </div>
                  <Button className="h-9 sm:h-10 px-4 bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[13px] sm:text-[14px] tracking-[0] leading-[30px] whitespace-nowrap w-full">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
