import React from 'react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { BestSellerSlider } from './best-seller-slider'

export const BestSeller = () => {
  return (
    <section className='bg-white mt-4'>
      <Container>
        <Box>
          <div className='flex justify-between items-center'>
            <Title>Top bán chạy toàn quốc</Title> 
            <Link href={'/'}> <p className='cursor-pointer text-[#0070e0] font-bold'>Xem thêm</p></Link>
          </div>
          <BestSellerSlider />
        </Box>
      </Container>
    </section>
  )
}