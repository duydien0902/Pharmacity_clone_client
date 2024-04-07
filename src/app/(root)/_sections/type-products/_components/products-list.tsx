import React from 'react'

import { ProductCardProps } from '@/types/product-card'

import { ProductCard } from '@/app/(root)/_components/product/product-card'

interface ProductsListProps {
    data: ProductCardProps[]
}

export const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <div className='grid grid-cols-10 gap-3 py-4'>
        {data?.map((item) => (
            <div key={item.id} className='col-span-2'>
                <ProductCard item={item} />
            </div>
        ))}
    </div>
  )
}