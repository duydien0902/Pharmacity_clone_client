'use client'

import React from 'react'
import Image from 'next/image'

const DATA = [
    '/images/promotion/promotion-slider3.png',
    '/images/promotion/promotion-slider4.png',
]

export const PromotionRight = () => {
  return (
    <div className='col-span-4'>
        <div className='flex flex-col gap-y-4'>
            {DATA?.map((item, index) => (
                <div className='relative aspect-[384/143] cursor-pointer' key={index}>
                    <Image src={item} alt='' fill className='rounded-[10px]' />
                </div>
            ))}
        </div>
    </div>
  )
}