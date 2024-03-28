import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IoIosNotificationsOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

import { Search } from './search'
import { DATA } from './data-header'

export const TopNav = () => {
  return (
    <nav className='flex gap-x-8 justify-between'>
        <div className='cursor-pointer'>
            <Image src={'/icons/logo-tagline.svg'} alt='logo' width={167} height={40} />
        </div>
        <div className='flex-1'>
            <Search />
            <div>
                <ul className='flex flex-wrap max-h-5 overflow-hidden gap-x-3 text-sm mt-1'>
                    {DATA?.linkItem_topNav?.map((item, index) => (
                       <Link href={item.url} key={index}>
                             <li className='overflow-hidden' ><p>{item.label}</p></li>
                       </Link>
                    ))}
                </ul>
            </div>
        </div>
        <div>
            <div className='flex items-center gap-x-7'>
                <IoIosNotificationsOutline size={30} className='cursor-pointer' />
                <CiShoppingCart size={30} className='cursor-pointer' />
                <div className='bg-white inline-flex items-center gap-x-1 text-[12px] font-bold text-black rounded-[20px] px-3 py-1.5'>
                    <FaRegCircleUser size={20} />
                    <p className='cursor-pointer hover:text-[#0072bc]'>Đăng ký</p>
                    /
                    <p className='cursor-pointer hover:text-[#0072bc]'>Đăng nhập</p>
                </div>
            </div>
        </div>
    </nav>
  )
}