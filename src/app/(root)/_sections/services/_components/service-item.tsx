'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceItemProps {
    item: {
        icon: string,
        title: string,
        url: string
    },
}

export const ServiceItem = ({ item }: ServiceItemProps) => {
    const { icon, title, url } = item

  return (
   <Link href={url}>
        <div className='flex flex-col gap-y-2 items-center max-w-20'>
            <Image src={icon} alt='' width={62} height={62}  />
            <p className='text-[#2b2b2b] text-sm text-center font-bold'>{title}</p>
        </div>
   </Link>
  )
}