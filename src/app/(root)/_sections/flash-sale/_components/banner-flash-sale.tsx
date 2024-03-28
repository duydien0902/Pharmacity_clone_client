import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Countdown } from '@/app/(root)/_components/countdown'

export const BannerFlashSale = () => {
    const targetDate = '2024-04-10T00:00:00';
  return (
    <div className='relative -mt-6'>
        <div className='absolute w-2 h-2 bg-[#00254a] rounded-tr-xl top-0 right-0' />
        <div className='absolute w-2 h-2 bg-[#00254a] rounded-tl-xl top-0 left-0' />
        <div className='absolute h-[76px] top-0 z-[1] px-1'>
            <Image src='/images/flash-sale/flash-sale-bg.png' alt='' width={500} height={500} className='w-[100vw] h-full' />
        </div>
        <div className='absolute flex items-center top-0 z-[2] h-[76px] w-full px-10 py-4'>
            <div className='flex items-center flex-1'>
                <div className=''>
                    <Image src={'/images/flash-sale/title.png'} alt='' width={500} height={500} className='mr-3 w-auto h-10' />
                </div>
                <Countdown targetDate={targetDate}/>
            </div>
            <Link href={'/'}>
                <div className='cursor-pointer'>
                    <p className='text-white font-bold'>Xem thêm</p>
                </div>
            </Link>
        </div>
    </div>
  )
}