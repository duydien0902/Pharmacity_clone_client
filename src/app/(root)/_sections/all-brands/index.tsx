import React from 'react'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { BrandsList } from './_components/brands-list'

const DATA = [
  {
    thumbnail: '/images/products/product1.png',
    title: '82X',
    id: 1,
    slug: '82X'
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Kolmar',
    id: 2,
    slug: 'kolmar'
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'NatureS Way',
    id: 3,
    slug: 'natures-way'
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Loreal',
    id: 4,
    slug: 'loreal'
  },
  {
    thumbnail: '/images/products/product1.png',
    title: 'Nature Gift',
    id: 5,
    slug: 'nature-gift'
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Dr.Frei',
    id: 6,
    slug: 'dr-frei',
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Greenbird',
    id: 7,
    slug: 'greenbird',
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'goodhealth',
    title: 'Goodhealth',
    id: 8,
  },
  {
    thumbnail: '/images/products/product1.png',
    title: 'Pharmacist Formulators',
    id: 9,
    slug: 'pharmacist-formulators',
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'LineaBon',
    id: 10,
    slug: 'lineaBon',
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Pharmacity',
    id: 11,
    slug: 'pharmacity',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Abbott',
    id: 12,
    slug: 'abbott',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'PediaSure',
    id: 13,
    slug: 'pediaSure',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Bobby',
    id: 14,
    slug: 'bobby',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'SHINPOONG',
    id: 15,
    slug: 'SHINPOONG',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Tracy Bee',
    id: 16,
    slug: 'Tracy-Bee',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Sanofi CHC',
    id: 17,
    slug: 'Sanofi-CHC',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Henry Blooms',
    id: 18,
    slug: 'Henry-Blooms',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Close up',
    id: 19,
    slug: 'Close-up',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Goodlife',
    id: 20,
    slug: 'Goodlife',
  },
  {
    thumbnail: '/images/products/product1.png',
    title: '82X',
    id: 21,
    slug: '82X'
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Kolmar',
    id: 22,
    slug: 'kolmar'
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'NatureS Way',
    id: 23,
    slug: 'natures-way'
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Loreal',
    id: 24,
    slug: 'loreal'
  },
  {
    thumbnail: '/images/products/product1.png',
    title: 'Nature Gift',
    id: 25,
    slug: 'nature-gift'
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Dr.Frei',
    id: 26,
    slug: 'dr-frei',
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Greenbird',
    id: 27,
    slug: 'greenbird',
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Goodhealth',
    slug: 'goodhealth',
    id: 28,
  },
  {
    thumbnail: '/images/products/product1.png',
    slug: 'pharmacist-formulators',
    title: 'Pharmacist Formulators',
    id: 29
  },
  {
    thumbnail: '/images/products/product2.png',
    slug: 'lineaBon',
    title: 'LineaBon',
    id: 30
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Pharmacity',
    slug: 'Pharmacity',
    id: 31
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'abbott',
    title: 'Abbott',
    id: 32
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'pediaSure',
    title: 'PediaSure',
    id: 33
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'bobby',
    title: 'Bobby',
    id: 34
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'SHINPOONG',
    title: 'SHINPOONG',
    id: 35
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'Tracy-Bee',
    title: 'Tracy Bee',
    id: 36
  },
  {
    thumbnail: '/images/products/product4.png',
    slug: 'Sanofi-CHC',
    title: 'Sanofi CHC',
    id: 37
  },
]


export const AllBrands = ({ title }: {title: string}) => {
    return (
      <section className='bg-white'>
          <Container>
              <Box className='py-6'>
                  <Title>{title}</Title>
                  <div className='pt-4'>
                    <BrandsList brandList={DATA}/>
                  </div>
              </Box>
          </Container>
      </section>
    )
}