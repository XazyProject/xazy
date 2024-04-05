'use client'
import SiteLogo from "@/assets/images/logo";
import Link from "next/link";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("fixed-body");
    } else {
      document.body.classList.remove("fixed-body");
    }
  };

  const closeMobileNavigation = () => {
    setOpen(false);
    document.body.classList.remove("fixed-body");
  };

  return (
    <div className="head-div">
      <div className="header-layout">
        <Link href="/" aria-label="Home">
          <SiteLogo />
        </Link>
        <div className="header-ul">
          <Hamburger toggled={isOpen} toggle={handleToggle} aria-label="Menu Toggle" />
          <ul>
            <li><Link href="/" onClick={closeMobileNavigation}  aria-label="Home">მთავარი</Link></li>
            <li><Link href="/courses" onClick={closeMobileNavigation} aria-label="Lessons">გაკვეთილები</Link></li>
            <li><Link href="https://discord.gg/3z7sxqMTaj" target="_blank" onClick={closeMobileNavigation} aria-label="Discord">შემოგვიერთდი</Link></li>
            <li><Link href="/contribute" onClick={closeMobileNavigation} aria-label="Contribution">მხარდაჭერა</Link></li>
          </ul>
        </div>
        <MobileNavigation isOpen={isOpen} closeNavigation={closeMobileNavigation} />
      </div>
    </div>
  );
};

export default Header;
