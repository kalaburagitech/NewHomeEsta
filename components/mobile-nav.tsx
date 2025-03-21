"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface NavItem {
  title: string;
  href: string;
  isNew?: boolean;
  children?: {
    title: string;
    href: string;
    isNew?: boolean;
  }[];
}

interface NavSection {
  title: string;
  items: {
    title: string;
    href: string;
    isNew?: boolean;
  }[];
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
    children: [],
  },
  {
    title: "BLOG",
    href: "/blog",
  },
];

const propertyMegaMenu: NavSection[] = [
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

export function MobileNav() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title);
    setOpenSection(null);
  };

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
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
                <span className="text-base font-bold leading-none">New</span>
                <span className="text-base font-bold leading-none">Home</span>
              </div>
            </Link>
            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  {item.children && item.children.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleItem(item.title)}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-100"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openItem === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openItem === item.title && (
                        <div className="ml-4 border-l pl-4">
                          {item.title === "PROPERTY" ? (
                            <div className="space-y-2 py-2">
                              {propertyMegaMenu.map((section) => (
                                <div
                                  key={section.title}
                                  className="flex flex-col"
                                >
                                  <button
                                    onClick={() => toggleSection(section.title)}
                                    className="flex items-center justify-between py-2 px-2 hover:bg-gray-50"
                                  >
                                    <span className="font-medium text-sm">
                                      {section.title}
                                    </span>
                                    <ChevronRight
                                      className={`h-4 w-4 transition-transform ${
                                        openSection === section.title
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  {openSection === section.title && (
                                    <div className="ml-4 border-l pl-2 py-2 space-y-2">
                                      {section.items.map((subItem) => (
                                        <SheetClose asChild key={subItem.title}>
                                          <Link
                                            href={subItem.href}
                                            className="flex items-center py-1 px-2 hover:bg-gray-50 text-sm"
                                          >
                                            {subItem.title}
                                            {subItem.isNew && (
                                              <span className="ml-2 text-orange-500 text-xs">
                                                ★
                                              </span>
                                            )}
                                          </Link>
                                        </SheetClose>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-2 py-2">
                              {item.children.map((child) => (
                                <SheetClose asChild key={child.title}>
                                  <Link
                                    href={child.href}
                                    className="flex items-center py-2 px-2 hover:bg-gray-50 text-sm"
                                  >
                                    {child.title}
                                    {child.isNew && (
                                      <span className="ml-2 text-orange-500 text-xs">
                                        ★
                                      </span>
                                    )}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-3 hover:bg-gray-100 font-medium"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="border-t p-4 space-y-2">
            <Link href="/join" className="w-full">
              <Button variant="outline" className="w-full justify-start">
                JOIN US
              </Button>
            </Link>
            <Link href="/add-property" className="w-full">
              <Button className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" /> ADD PROPERTY
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
