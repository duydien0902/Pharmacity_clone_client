import React from 'react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { SelectionSlider } from './selection-slider'

export const Selection = () => {
  return (
    <section className='bg-white my-4'>
      <Container>
        <Box>
          <div className='flex justify-between items-center'>
            <Title>Thêm lựa chọn mới tại Pharmacity</Title>
            <Link href={'/'}> <p className='cursor-pointer text-[#0070e0] font-bold'>Xem thêm</p></Link>
          </div>
          <SelectionSlider />
        </Box>
      </Container>
    </section>
  )
}