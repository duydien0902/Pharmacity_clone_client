import React from 'react'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { CatalogueList } from '../../_components/catalogue/catalogue-list'

const DATA = [
  {
    thumbnail: '/images/products/product1.png',
    title: 'Thuốc không kê đơn Thuốc không kê đơnThuốc không kê đơnThuốc không kê đơn',
    id: 1
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Thuốc không kê đơn',
    id: 2
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Thuốc không kê đơn',
    id: 3
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Thuốc không kê đơn',
    id: 4
  },
  {
    thumbnail: '/images/products/product1.png',
    title: 'Thuốc không kê đơn Thuốc không kê đơnThuốc không kê đơnThuốc không kê đơn',
    id: 1
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Thuốc không kê đơn',
    id: 2
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Thuốc không kê đơn',
    id: 3
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Thuốc không kê đơn',
    id: 4
  },
  {
    thumbnail: '/images/products/product1.png',
    title: 'Thuốc không kê đơn Thuốc không kê đơnThuốc không kê đơnThuốc không kê đơn',
    id: 1
  },
  {
    thumbnail: '/images/products/product2.png',
    title: 'Thuốc không kê đơn',
    id: 2
  },
  {
    thumbnail: '/images/products/product3.png',
    title: 'Thuốc không kê đơn',
    id: 3
  },
  {
    thumbnail: '/images/products/product4.png',
    title: 'Thuốc không kê đơn',
    id: 4
  },
  
]

export const CatelogueDetail = ({ title }: {title: string}) => {
  return (
    <section className='bg-white'>
        <Container>
            <Box className='py-6'>
                <Title>{title}</Title>
                <div className='pt-4'>
                  <CatalogueList catelogueList={DATA}/>
                </div>
            </Box>
        </Container>
    </section>
  )
}