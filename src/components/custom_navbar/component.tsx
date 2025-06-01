import { BackgroundBeamsWithCollision } from "../custom_body_background/ui";
import CustomCollapsible from "../custom_collapsible/component";
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
    link: "#",
  },
  {
    name: "About us",
    link: "#",
  },
  {
    name: "Leadership",
    link: "#"
  },
  {
    name: "Career",
    link: "#"
  },
  {
    name: "Manage & Grow",
    link: "#",
    items: [
      {
        name: "Our Works",
        link: "#",
      },
      {
        name: "Funding",
        link: "#",
      },
      {
        name: "Laws",
        link: "#",
      },
      {
        name: "News",
        link: "#",
      },
      {
        name: "Our Services",
        link: "#",
      },
    ],
  },
  {
    name: "IT & Digital",
    link: "#",
    items: [
      {
        name: "Our Services",
        link: "#",
      },
      {
        name: "Our Products",
        link: "#",
      },
      {
        name: "Spotlight",
        link: "#",
      },
    ],
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Contact us",
    link: "#",
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
              <>
                {item.items && item.items?.length > 0 ? (
                  <CustomCollapsible title={item.name} items={item.items} />
                ) : (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-foreground-secondary w-full"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                )}
              </>
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
