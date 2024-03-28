import React from 'react'

import { BannerBlogList } from './banner-blog-list'

interface BannerBlogTopicsProps {
    data: {

    }[]
}

export const BannerBlogTopics = ({ data }: BannerBlogTopicsProps) => {
  return (
    <div>
        <BannerBlogList data={data} />
    </div>
  )
}