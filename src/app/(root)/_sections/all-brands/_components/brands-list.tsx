'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BrandsListProps {
    brandList: {
        thumbnail: string,
        title: string,
        id: number,
        slug: string
    }[]
}

export const BrandsList = ({ brandList }: BrandsListProps) => {
    const pathname = usePathname()
  return (
    <div className='grid grid-cols-8 gap-4'>
        {brandList?.map((item) => (
            <Link href={`${pathname}/${item.slug}`} key={item.id}>
                <div className='flex flex-col min-h-[184px]'>
                    <div className='max-w-[136px] max-h-[136px] bg-white overflow-hidden rounded-[8px] shadow-lg'>
                        <Image 
                            src={item.thumbnail} 
                            alt='' 
                            width={136} 
                            height={136}
                        />
                    </div>
                    <h4 className='mt-2.5 text-sm font-semibold line-clamp-2 text-center max-w-[136px] leading-5'>{item.title}</h4>
                </div>
            </Link>
        ))}
    </div>
  )
}