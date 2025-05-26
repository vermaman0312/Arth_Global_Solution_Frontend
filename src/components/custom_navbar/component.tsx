import { BackgroundBeamsWithCollision } from "../custom_body_background/ui";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui";
import { useState } from "react";

type props = {
  children: React.ReactNode;
};

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About us",
    link: "#aboutus",
  },
  {
    name: "Funding",
    link: "#funding",
  },
  {
    name: "Laws",
    link: "#laws",
  },
  {
    name: "News",
    link: "#news",
  },
  {
    name: "Our works",
    link: "#ourworks",
  },
  {
    name: "Blog",
    link: "#blog",
  },
  {
    name: "Contact us",
    link: "#contactus",
  },
];

export function CustomNavbar({ ...props }: props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full scrollbar-hidden">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <BackgroundBeamsWithCollision>
        <div className="w-full px-[1.2rem] md:px-[2.7rem] mt-10 flex flex-col items-center justify-start gap-2 scrollbar-hidden">
          {props.children}
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
