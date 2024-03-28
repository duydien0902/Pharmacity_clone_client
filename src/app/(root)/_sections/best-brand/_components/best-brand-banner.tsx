import React from 'react'
import Image from 'next/image'

export const BestBrandBanner = ({ data }: {data: string}) => {
  return (
    <div className='col-span-6 relative overflow-hidden rounded-[4px] cursor-pointer'>
        <Image src={data} alt='banner' fill />
    </div>
  )
}