"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Plus, User, ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
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

interface SiteHeaderProps {
  onOpenAuthModal?: () => void;
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

function SimpleDropdown({
  items,
  isOpen,
}: {
  items: NavItem["children"];
  isOpen: boolean;
}) {
  if (!isOpen || !items) return null;

  return (
    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg border border-gray-100 z-50 min-w-[240px] overflow-hidden">
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

export function SiteHeader({ onOpenAuthModal }: SiteHeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Improved hover handling with delay to prevent accidental menu closing
  const handleMouseEnter = (title: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 100); // Small delay to prevent menu from closing when moving between items
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  // Handle click for mobile/tablet touch devices
  const handleClick = (title: string, e: React.MouseEvent) => {
    // If the menu is already open and has children, prevent navigation
    if (
      navItems.find((item) => item.title === title)?.children &&
      openMenu !== title
    ) {
      e.preventDefault();
      setOpenMenu(title);
    } else if (openMenu === title) {
      // If clicking the same menu item again, close it
      setOpenMenu(null);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        {/* Logo on the left */}
        <div className="flex-shrink-0 mr-4">
          <Link href="/" className="flex items-center">
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
            <span className="text-lg font-bold leading-none ml-2">
              HOMEESTA
            </span>
          </Link>
        </div>

        {/* Navigation centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
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
                    "flex items-center text-sm font-medium transition-colors hover:text-black relative py-5",
                    openMenu === item.title
                      ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black"
                      : "text-gray-600"
                  )}
                  onClick={(e) => handleClick(item.title, e)}
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

                {item.title !== "PROPERTY" && item.children && (
                  <SimpleDropdown
                    items={item.children}
                    isOpen={openMenu === item.title}
                  />
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center ml-auto space-x-4">
          <Button
            variant="ghost"
            className="hidden sm:flex items-center"
            onClick={onOpenAuthModal}
          >
            <User className="mr-2 h-4 w-4" />
            JOIN US
          </Button>
          <Link href="/add-property">
            <Button className="hidden md:flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              ADD PROPERTY
            </Button>
          </Link>

          {/* Mobile menu */}
          <MobileNav onOpenAuthModal={onOpenAuthModal} />
        </div>
      </div>

      {/* Property Mega Menu - Full Width */}
      {openMenu === "PROPERTY" && (
        <div
          className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40"
          onMouseEnter={() => handleMouseEnter("PROPERTY")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-6">
                  LIST TYPES
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/property/half-map"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      HALF MAP LIST{" "}
                      <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/sidebar"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      SIDEBAR LIST
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/sidebar-wide"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      SIDEBAR LIST WIDE{" "}
                      <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/top-filter"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      TOP FILTER LIST{" "}
                      <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/top-filter-wide"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      TOP FILTER LIST WIDE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/compact"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      COMPACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-6">
                  LIST LAYOUTS
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/property/layout/two-columns"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      TWO COLUMNS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/layout/three-columns"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      THREE COLUMNS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/layout/three-columns-wide"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      THREE COLUMNS WIDE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/layout/four-columns"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      FOUR COLUMNS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/layout/four-columns-wide"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      FOUR COLUMNS WIDE
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-6">
                  SINGLE TYPES
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/property/type/standard"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      STANDARD <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/type/gallery"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      GALLERY <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/type/grid"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      GRID <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/type/video"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      VIDEO <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/property/type/virtual-tour"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      VIRTUAL TOUR{" "}
                      <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-6">
                  REAL ESTATE
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/real-estate/agency"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      AGENCY <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/real-estate/agent"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      AGENT <span className="ml-2 text-orange-500">★</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/real-estate/apartments"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      APARTMENTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/real-estate/for-rent"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      FOR RENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/real-estate/location"
                      className="text-gray-700 hover:text-black flex items-center text-sm"
                    >
                      LOCATION
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 w-full"></div>
        </div>
      )}
    </header>
  );
}
