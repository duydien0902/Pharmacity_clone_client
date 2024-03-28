import React from 'react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'
import { Title } from '@/components/ui/title'

import { BlogTopics } from './_components/blog-topics'

export const Health = () => {
  return (
    <section className='bg-white my-4'>
      <Container>
        <Box className='py-0 pt-4'>
          <div className='flex justify-between items-center'>
            <Title>Góc sức khoẻ</Title>
            <Link href={'/'}> <p className='cursor-pointer text-[#0070e0] font-bold'>Xem tất cả</p></Link>
          </div>
          <BlogTopics />
        </Box>
      </Container>
    </section>
  )
}
