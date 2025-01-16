"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sections = [
  { name: "About Us", href: "#about" },
  { name: "What We Offer", href: "#offer" },
  { name: "Features", href: "#features" },
  { name: "Applications", href: "#applications" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="flex-1 container flex h-14 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">EEG Startup</span>
        </Link>
        <div className="mr-4 hidden md:flex md:flex-1">
          <nav className="flex-1 p-20 flex items-center space-x-6 text-sm font-medium justify-between">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={() => {}}
            >
              <span className="font-bold">EEG Startup</span>
            </MobileLink>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {sections.map((section) => (
                  <MobileLink
                    key={section.name}
                    href={section.href}
                    onOpenChange={() => {}}
                  >
                    {section.name}
                  </MobileLink>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add any additional navbar items here */}
          </div>
          <nav className="flex items-center">
            <Button asChild>
              <Link href="#early-access">Join Waitlist</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface MobileLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  href: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const handleClick = () => {
    onOpenChange?.(false);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
