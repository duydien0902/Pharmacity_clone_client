import React from 'react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { TakecareMomSlider } from './takecare-mom-slider'

export const TakecareMom = () => {
  return (
    <section className='bg-white my-4'>
      <Container>
        <Box>
          <div className='flex justify-between items-center'>
            <Title>Chăm sóc mẹ bầu</Title>
            <Link href={'/'}> <p className='cursor-pointer text-[#0070e0] font-bold'>Xem thêm</p></Link>
          </div>
          <TakecareMomSlider />
        </Box>
      </Container>
    </section>
  )
}