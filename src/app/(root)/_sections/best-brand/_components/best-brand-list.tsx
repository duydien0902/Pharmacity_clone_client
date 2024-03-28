import React from 'react'
import Image from 'next/image'

interface BestBrandListProps {
  data: {
    thumbnail: string,
    title: string,
  }[]
}

export const BestBrandList = ({ data }: BestBrandListProps) => {

  return (
    <div className=' col-span-6 grid grid-cols-12 gap-3'>
        {data?.map((item, index) => (
            <div 
                className='col-span-6 group relative aspect-[291/235] w-full max-w-[300px] max-h-[235px] h-full overflow-hidden rounded-[4px] cursor-pointer' 
                key={index}
            >
                <Image src={item.thumbnail} alt='' fill />
                <p className='absolute bottom-0 line-clamp-1 w-full text-base px-2 py-2 rounded-b-[4px] text-center group-odd:bg-[#e3f7fc] group-even:bg-[#99d9f0]'>
                  {item.title}
                </p>
            </div>
        ))}
    </div>
  )
}