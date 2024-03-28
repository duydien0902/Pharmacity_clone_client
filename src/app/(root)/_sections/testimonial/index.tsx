import React from 'react'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'

import { TestimonialList } from './testimonial-list'

export const Testimonial = () => {
  return (
    <section className='bg-white mt-4'>
        <Container>
            <Box>
                <TestimonialList /> 
            </Box>
        </Container>
    </section>
  )
}