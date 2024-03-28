import React from 'react'

import { Container } from '@/components/ui/container'

import { ServicesList } from './_components/services-list'

export const Services = () => {
  return (
    <section className='bg-white pb-4'>
        <Container>
            <ServicesList />
        </Container>
    </section>
  )
}