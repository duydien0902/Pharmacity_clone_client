import React from 'react'

import { CatalogueItem } from '@/types/catelogue'

import { CatalogueCard } from './catalogue-card'

export const CatalogueList = ({ catelogueList }: {catelogueList: CatalogueItem[]}) => {
  return (
    <div className='grid grid-cols-8 gap-4'>
        {catelogueList?.map((item) => (
            <CatalogueCard item={item} key={item.id} />
        ))}
    </div>
  )
}