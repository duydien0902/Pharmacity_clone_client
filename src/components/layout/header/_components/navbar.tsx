'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';

import { IoMdMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { DATA } from './data-header'
import { Catelogue } from './catelogue';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className='mt-4 flex items-center gap-x-4' ref={ref}>
      <div 
        className='flex items-center justify-between max-w-[187px] w-full px-4 py-1.5 cursor-pointer bg-white text-[#2b2b2b] hover:text-[#0072bc] rounded-[4px]'
        onClick={() => setIsMenuOpen(prev => !prev)}  
      >
        <div className='flex items-center gap-x-2'>
          <IoMdMenu size={20} />
          <p>Danh mục</p>
        </div>
        <div>
          {isMenuOpen ? 
            <IoIosArrowUp size={18}/> 
            :  
            <IoIosArrowDown size={18}/>}
        </div>
      </div>
      <div>
        <ul className='flex items-center gap-x-5'>
          {DATA?.linkItem_navBar?.map((item, index) => (
            <Link href={item.url} key={index}>
              <li className='font-semibold'><p>{item.label}</p></li>
            </Link>
          ))}  
        </ul>
      </div>

      {isMenuOpen && <Catelogue />}
    </nav>
  )
}