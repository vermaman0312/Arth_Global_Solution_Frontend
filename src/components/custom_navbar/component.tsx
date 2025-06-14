import { useLocation } from "react-router-dom";
import { useTranslation } from "../../react-intl/useTranslation";
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
    name: "headers.home",
    link: "/public/home",
  },
  {
    name: "headers.about_us",
    link: "/public/about-us",
  },
  {
    name: "headers.leadership",
    link: "/public/leadership",
  },
  {
    name: "headers.career",
    link: "/public/career",
  },
  {
    name: "headers.manage_grow.title",
    link: "/public/manage-grow",
    items: [
      {
        name: "headers.manage_grow.our_works",
        link: "/public/manage-grow/our-works",
      },
      {
        name: "headers.manage_grow.funding",
        link: "/public/manage-grow/funding",
      },
      {
        name: "headers.manage_grow.laws",
        link: "/public/manage-grow/laws",
      },
      {
        name: "headers.manage_grow.news",
        link: "/public/manage-grow/news",
      },
      {
        name: "headers.manage_grow.our_services",
        link: "/public/manage-grow/our-services",
      },
    ],
  },
  {
    name: "headers.it_digital.title",
    link: "/public/it-digital",
    items: [
      {
        name: "headers.it_digital.our_services",
        link: "/public/it-digital/our-services",
      },
      {
        name: "headers.it_digital.our_products",
        link: "/public/it-digital/our-products",
      },
      {
        name: "headers.it_digital.spotlight",
        link: "/public/it-digital/spotlight",
      },
    ],
  },
  {
    name: "headers.blogs",
    link: "/public/blogs",
  },
  {
    name: "headers.contact_us",
    link: "/public/contact-us",
  },
];

export function CustomNavbar({ ...props }: props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;
  const url = pathname.split("/public/")[1];

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
                  <CustomCollapsible
                    title={t(item.name)}
                    items={item.items}
                    URL={item.link}
                  />
                ) : (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative text-foreground-secondary w-full px-4 p-1 rounded-full ${
                      url === item.link.split("/public/")[1]
                        ? "bg-gray-400"
                        : ""
                    }`}
                  >
                    <span className="block">{t(item.name)}</span>
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
