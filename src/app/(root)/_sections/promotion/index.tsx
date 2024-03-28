import React from 'react'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'

import { PromotionSlider } from './_components/promotion-slider'
import { PromotionRight } from './_components/promotion-right'

export const Promotion = () => {
  return (  
    <section className='bg-white'>
        <Container className=''>
          <Box className='grid grid-cols-12 gap-x-4 my-0'>
            <PromotionSlider />
            <PromotionRight />
          </Box>
        </Container>
    </section>
  )
}