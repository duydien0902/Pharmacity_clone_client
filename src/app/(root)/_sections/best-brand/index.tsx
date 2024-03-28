import React from 'react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { BestBrandBanner } from './_components/best-brand-banner'
import { BestBrandList } from './_components/best-brand-list'

const DATA = {
  banner: '/images/best-brand/banner.png',
  items: [
    {
      thumbnail: '/images/best-brand/best-brand1.png',
      title: 'Blackmores',
    },
    {
      thumbnail: '/images/best-brand/best-brand2.png',
      title: 'Nature Gift',
    },
    {
      thumbnail: '/images/best-brand/best-brand3.png',
      title: 'Brauer',
    },
    {
      thumbnail: '/images/best-brand/best-brand4.png',
      title: 'Kudos',
    },
  ]
}

export const BestBrand = () => {
  return (
    <section className='bg-white my-4'>
      <Container>
        <Box>
          <div className='flex justify-between items-center'>
            <Title>Thương hiệu bán chạy</Title>
            <Link href={'/'}> <p className='cursor-pointer text-[#0070e0] font-bold'>Xem thêm</p></Link>
          </div>
          <div className='mt-4 grid grid-cols-12 gap-x-3'>
            <BestBrandBanner data={DATA.banner} />
            <BestBrandList data={DATA.items} />
          </div>
        </Box>
      </Container>
    </section>
  )
}