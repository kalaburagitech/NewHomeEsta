"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, User, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  isNew?: boolean;
  children?: {
    title: string;
    href: string;
    description?: string;
    isNew?: boolean;
  }[];
}

interface MegaMenuProps {
  items: {
    title: string;
    items: {
      title: string;
      href: string;
      isNew?: boolean;
    }[];
  }[];
  isOpen: boolean;
}

const navItems: NavItem[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PAGES",
    href: "#",
    children: [
      { title: "ABOUT US", href: "/about" },
      { title: "PRICING PACKAGES", href: "/pricing", isNew: true },
      { title: "OUR TEAM", href: "/team" },
      { title: "FAQ PAGE", href: "/faq" },
      { title: "CONTACT US", href: "/contact" },
      { title: "GET IN TOUCH", href: "/get-in-touch" },
      { title: "404 ERROR PAGE", href: "/404" },
    ],
  },
  {
    title: "PROPERTY",
    href: "#",
    children: [
      { title: "PROPERTY LISTING", href: "/property/listing" },
      { title: "PROPERTY DETAILS", href: "/property/details", isNew: true },
      { title: "ADD PROPERTY", href: "/property/add" },
      { title: "PROPERTY MANAGEMENT", href: "/property/management" },
    ],
  },
  {
    title: "BLOG",
    href: "/blog",
  },
];

function MegaMenu({ items, isOpen }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 animate-in fade-in-10 zoom-in-98 duration-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
          {items.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-sm text-gray-900 border-b border-gray-200 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="group text-gray-700 hover:text-black flex items-center text-sm font-medium transition-all duration-200 relative overflow-hidden py-1"
                    >
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                        {item.title}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                          NEW
                        </span>
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-gray-100 to-transparent group-hover:w-full transition-all duration-300 -z-0"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimpleDropdown({
  items,
  isOpen,
}: {
  items: NavItem["children"];
  isOpen: boolean;
}) {
  if (!isOpen || !items) return null;

  return (
    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg border border-gray-100 z-50 min-w-[240px] overflow-hidden animate-in fade-in-10 zoom-in-95 duration-100">
      <ul className="py-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="group px-5 py-2.5 text-gray-700 hover:text-black flex items-center text-sm font-medium transition-all duration-200 relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                {item.title}
              </span>
              {item.isNew && (
                <span className="ml-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  NEW
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-gray-100 to-transparent group-hover:w-full transition-all duration-300 -z-0"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const propertyMegaMenu = [
    {
      title: "LIST TYPES",
      items: [
        { title: "HALF MAP LIST", href: "/property/half-map", isNew: true },
        { title: "SIDEBAR LIST", href: "/property/sidebar" },
        {
          title: "SIDEBAR LIST WIDE",
          href: "/property/sidebar-wide",
          isNew: true,
        },
        { title: "TOP FILTER LIST", href: "/property/top-filter", isNew: true },
        { title: "TOP FILTER LIST WIDE", href: "/property/top-filter-wide" },
        { title: "COMPACT", href: "/property/compact" },
      ],
    },
    {
      title: "LIST LAYOUTS",
      items: [
        { title: "TWO COLUMNS", href: "/property/layout/two-columns" },
        { title: "THREE COLUMNS", href: "/property/layout/three-columns" },
        {
          title: "THREE COLUMNS WIDE",
          href: "/property/layout/three-columns-wide",
        },
        { title: "FOUR COLUMNS", href: "/property/layout/four-columns" },
        {
          title: "FOUR COLUMNS WIDE",
          href: "/property/layout/four-columns-wide",
        },
      ],
    },
    {
      title: "SINGLE TYPES",
      items: [
        { title: "STANDARD", href: "/property/type/standard", isNew: true },
        { title: "GALLERY", href: "/property/type/gallery", isNew: true },
        { title: "GRID", href: "/property/type/grid", isNew: true },
        { title: "VIDEO", href: "/property/type/video", isNew: true },
        {
          title: "VIRTUAL TOUR",
          href: "/property/type/virtual-tour",
          isNew: true,
        },
      ],
    },
    {
      title: "REAL ESTATE",
      items: [
        { title: "AGENCY", href: "/real-estate/agency", isNew: true },
        { title: "AGENT", href: "/real-estate/agent", isNew: true },
        { title: "APARTMENTS", href: "/real-estate/apartments" },
        { title: "FOR RENT", href: "/real-estate/for-rent" },
        { title: "LOCATION", href: "/real-estate/location" },
      ],
    },
  ];

  const handleMouseEnter = (title: string) => {
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-8">
            <div className="relative h-10 w-10">
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">New</span>
              <span className="text-lg font-bold leading-none">Home</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-black relative",
                    openMenu === item.title
                      ? "text-black after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                      : "text-gray-600"
                  )}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform",
                        openMenu === item.title ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                {item.title === "PROPERTY" && item.children && (
                  <MegaMenu
                    items={propertyMegaMenu}
                    isOpen={openMenu === item.title}
                  />
                )}

                {item.title !== "PROPERTY" && item.children && (
                  <SimpleDropdown
                    items={item.children}
                    isOpen={openMenu === item.title}
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/join" className="hidden md:block">
            <Button variant="ghost" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              JOIN US
            </Button>
          </Link>
          <Link href="/add-property">
            <Button className="hidden md:flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              ADD PROPERTY
            </Button>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="outline" size="sm" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
