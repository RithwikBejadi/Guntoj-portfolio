"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-15" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Welcome</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">My Work</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/education">
          <MenuItem setActive={setActive} active={active} item="Education">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/education">My Journey</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Certificates">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/certificates">Achievements</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/skills">My Expertise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
} 