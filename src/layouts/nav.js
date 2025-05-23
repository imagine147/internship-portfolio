"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link"
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
export default function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenubar = () => setMenuOpen(false);

  const openMenubar = () => {
    if (window.innerWidth <= 1024) {
      setMenuOpen(!menuOpen);
    }
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleClickOutside = (event) => {
    if (navRef?.current && !navRef.current.contains(event.target)) {
      closeMenubar();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="bg-[#0A0A0A] sticky top-0 w-full z-60"> 
      <div className="container w-full md:w-11/12 mx-auto flex justify-between items-center p-4 text-[#C7C7C7] text-base">
        <Link href="/" className="text-2xl hover:text-[#D3E97A] transition-colors duration-200">OLAJIDE AKINSOLA</Link>
        <button className="absolute right-4 top-4 md:hidden cursor-pointer" onClick={openMenubar}>
          {menuOpen ? ( <IoClose className="w-[32px] h-[32px]"/> ) : ( <HiMenuAlt4 className="w-[32px] h-[32px]" />)}
        </button>

        {/* mobile-menu */}
        <div ref={navRef} className={`absolute top-full right-2 w-[95%] mx-auto bg-white rounded-lg shadow-lg md:hidden flex flex-col gap-4 z-50 transition-all ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-6 p-6 text-[#0A0A0A]">
            <Link href="/#projects" passHref onClick={() => { handleSetActive('projects'); closeMenubar(); }} className="hover:text-[#D3E97A] transition-colors duration-200"><h3>Work</h3></Link>
            <Link href="/about" onClick={() => { handleSetActive('about'); closeMenubar(); }} className="hover:text-[#D3E97A] transition-colors duration-200"><h3>About</h3></Link>
            <Link href="/#contact" passHref onClick={() => { handleSetActive('contact'); closeMenubar(); }} className="hover:text-[#D3E97A] transition-colors duration-200"><h3>Contact</h3></Link>
          </div>
        </div>

        {/* desktop-menu */}
        <div className="hidden md:flex gap-6">
          <a href="#projects" className="hover:text-[#D3E97A] transition-colors duration-200"><h3>Work</h3></a>
          <Link href="/about" className="hover:text-[#D3E97A] transition-colors duration-200"><h3>About</h3></Link>
          <Link href="/#contact" className="hover:text-[#D3E97A] transition-colors duration-200"><h3>Contact</h3></Link>
        </div>
      </div>
    </nav>
  )
}