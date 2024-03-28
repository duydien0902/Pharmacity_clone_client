'use client'

import React from 'react'
import Image from 'next/image'

import { Settings } from 'react-slick'

import { SlickSlider } from '@/components/ui/slick-slider'

const DATA = [
    '/images/promotion/promotion-slider1.png',
    '/images/promotion/promotion-slider2.png',
    '/images/promotion/promotion-slider3.png',
    '/images/promotion/promotion-slider4.png',
]

export const PromotionSlider = () => {

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    }

  return (
    <div className='col-span-8'>
        <SlickSlider settings={settings}>
           {DATA?.map((item, index) => (
                <div className=' relative aspect-[800/307] rounded-[20px] cursor-pointer' key={index}>
                    <Image src={item} alt='' fill className=' rounded-[10px] overflow-hidden' />
                </div>  
           ))}
        </SlickSlider>
    </div>
  )
}