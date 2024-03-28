'use client'

import React from 'react'
import Image from 'next/image'

import { CatalogueItem } from '@/types/catelogue'

export const CatalogueCard = ({ item }: {item: CatalogueItem}) => {
  return (
    <div className='col-span-1 cursor-pointer'>
        <div className='flex flex-col items-center justify-center gap-y-2 '>
            <Image src={item.thumbnail} alt='' width={134} height={134} className='rounded-full' />
            <p className='text-center text-[#2b2b2b] line-clamp-2'>{item.title}</p>
        </div>
    </div>
  )
}