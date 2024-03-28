import React from 'react'

import { Container } from '@/components/ui/container'

import { BannerFlashSale } from './_components/banner-flash-sale'
import { FlashSaleSlider } from './_components/flash-sale-slider'

export const FlashSale = () => {
  return (
    <section className='my-4'>
      <div className='bg-gradient-to-t from-[#0070E0] via-[#01C091] to-[#72E5C9]'>
        <Container className='my-4 py-4'>
          <div className='py-0'>
            <BannerFlashSale />
          </div>
          <div className='mt-24 bg-inherit'>
            <FlashSaleSlider />
          </div>
        </Container>
      </div>
    </section>
  )
}