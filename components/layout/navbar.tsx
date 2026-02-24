"use client";

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
import { Menu, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTabletDropdownOpen, setIsTabletDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabletDropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { key: "home", isActive: true },
    { key: "about", isActive: false },
    { key: "activities", isActive: false },
    { key: "products", isActive: false },
    { key: "contact", isActive: false },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
    setIsTabletDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Close desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
      
      // Close tablet dropdown
      if (tabletDropdownRef.current && !tabletDropdownRef.current.contains(target)) {
        setIsTabletDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsTabletDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
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
                    {t(`navbar.${item.key}`)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-[22px]">
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="rounded-[10px] border border-black/70 flex items-center justify-center bg-white hover:bg-gray-50 p-0 px-[10px]"
              >
                <span className="text-sm font-bold text-gray-700">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 ml-1 text-gray-600" />
              </Button>
              
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 min-w-[120px]">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                        language.code === i18n.language ? 'bg-gray-50 font-medium' : ''
                      }`}
                    >
                      {/* <span className="font-bold text-gray-700 w-6">{language.code.toUpperCase()}</span> */}
                      <span className="text-gray-700">{language.name}</span>
                      {language.code === i18n.language && (
                        <span className="ml-auto text-green-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button className="h-9 sm:h-10 px-4 sm:px-[7px] bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[12px] sm:text-[14px] tracking-[0] leading-[30px] whitespace-nowrap sm:px-[31px]">
              {t('navbar.getInTouch')}
            </Button>
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center gap-[22px]">
          <div className="relative" ref={tabletDropdownRef}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsTabletDropdownOpen(!isTabletDropdownOpen)}
              className="rounded-[10px] border border-black/70 flex items-center justify-center bg-white hover:bg-gray-50 p-0 px-[10px]"
            >
              <span className="text-sm font-bold text-gray-700">{currentLanguage.code.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 ml-1 text-gray-600" />
            </Button>
            
            {isTabletDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 min-w-[120px]">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      language.code === i18n.language ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    <span className="text-gray-700">{language.name}</span>
                    {language.code === i18n.language && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button className="h-9 px-3 bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[12px] tracking-[0] leading-[30px] whitespace-nowrap">
            {t('navbar.getInTouch')}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8 object-cover"
                    alt="Ferme Intégrée Gawe Logo"
                    src="/logo.svg"
                  />
                  <h1 className="text-[#333333] text-sm font-['Ubuntu',Helvetica] font-bold tracking-[0] leading-6 whitespace-nowrap">
                    Ferme Intégrée Gawe
                  </h1>
                </div>
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
                    {t(`navbar.${item.key}`)}
                  </div>
                ))}
                
                <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
                  <div className="flex gap-2">
                    <Button
                      variant={i18n.language === 'en' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changeLanguage('en')}
                      className="flex-1"
                    >
                      EN
                    </Button>
                    <Button
                      variant={i18n.language === 'fr' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changeLanguage('fr')}
                      className="flex-1"
                    >
                      FR
                    </Button>
                  </div>
                  <Button className="h-9 sm:h-10 px-4 bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[13px] sm:text-[14px] tracking-[0] leading-[30px] whitespace-nowrap w-full">
                    {t('navbar.getInTouch')}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8 object-cover"
                    alt="Ferme Intégrée Gawe Logo"
                    src="/logo.svg"
                  />
                  <h1 className="text-[#333333] text-sm font-['Ubuntu',Helvetica] font-bold tracking-[0] leading-6 whitespace-nowrap">
                    Ferme Intégrée Gawe
                  </h1>
                </div>
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
                    {t(`navbar.${item.key}`)}
                  </div>
                ))}
                
                <div className="flex flex-col gap-4 mt-6 pt-6 border-t">
                  {/* <div className="flex items-center gap-3">
                    <div className="w-[41px] h-[41px] rounded-[10px] border border-black/70 flex items-center justify-center">
                      <img
                        className="w-[20px] h-[20px]"
                        alt="Language selector"
                        src="/us-flag.svg"
                      />
                    </div>
                    <span className="text-[#202020]">{t('navbar.language')}</span>
                  </div> */}
                  <div className="flex gap-2">
                    <Button
                      variant={i18n.language === 'en' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changeLanguage('en')}
                      className="flex-1"
                    >
                      EN
                    </Button>
                    <Button
                      variant={i18n.language === 'fr' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changeLanguage('fr')}
                      className="flex-1"
                    >
                      FR
                    </Button>
                  </div>
                  <Button className="h-9 sm:h-10 px-4 bg-[#219653] hover:bg-[#1a7a42] rounded-xl font-['Ubuntu',Helvetica] font-bold text-white text-[13px] sm:text-[14px] tracking-[0] leading-[30px] whitespace-nowrap w-full">
                    {t('navbar.getInTouch')}
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
