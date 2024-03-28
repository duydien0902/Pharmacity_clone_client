import React from 'react';
import Image from 'next/image';

export const HightBrandCart = ({ item }: {item: string}) => {
  return (
    <div className='relative aspect-[290/478] w-full max-w-[300px] max-h-[478] '>
      <Image src={item} alt='hight-brand' fill quality={100} />
    </div>
  )
}