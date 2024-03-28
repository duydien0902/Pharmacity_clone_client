import React from 'react'

import { HightBrandCart } from './hight-brand-cart'

const DATA = [
    '/images/hight-brand/hight-brand1.png',
    '/images/hight-brand/hight-brand2.png',
    '/images/hight-brand/hight-brand3.png',
    '/images/hight-brand/hight-brand4.png',
]

export const HightBrandList = () => {
  return (
    <div className='mt-4 flex gap-x-3'>
        {DATA?.map((item, index) => (
            <HightBrandCart item={item} key={index} />  
        ))}
    </div>
  )
}