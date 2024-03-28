import React from 'react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { HomeMedicineSlider } from './home-medicine-slider'

export const HomeMedicine = () => {
  return (
    <section className='bg-white my-4'>
      <Container>
        <Box>
          <div className='flex justify-between items-center'>
            <Title>Tủ thuốc gia đình - Giao nhanh 2H</Title>
            <Link href={'/'}> <p className='cursor-pointer text-[#0070e0] font-bold'>Xem thêm</p></Link>
          </div>
          <HomeMedicineSlider />
        </Box>
      </Container>
    </section>
  )
}