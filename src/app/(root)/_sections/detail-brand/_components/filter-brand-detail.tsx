'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'


import { FilterPriceRange } from '@/app/(root)/_components/filter-total/components/filter-price-range'

export const FilterBrandDetail = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [clearForm, setClearForm] = useState(false)

  const onSubmitPrice = (v: {valueMin: string, valueMax: string}) => {
    const { valueMin, valueMax } = v;
   
    if (valueMin !== '' && valueMax !== '') {
        const queryString = `price_from=${valueMin}&price_to=${valueMax}`
    
        const url = `${pathname}?${queryString}`;
        router.push(url, { scroll: false });
    } 
  }

  const handleClearForm = () => {
    setClearForm(!clearForm)
    router.push(pathname, { scroll: false });
}

  return (
    <div className='pt-2 sticky top-4 min-h-[50vh] max-h-[100vh] mb-10'>
        <div className='pr-3 pl-0.5 flex justify-between items-center'>
            <p className='text-[#2b2b2b] font-bold'>Bộ lọc</p>
            <p
                className='text-[#0072bc] font-bold cursor-pointer'
                onClick={handleClearForm}
            >
                Thiết lập lại
            </p>
        </div>
        <hr className='mt-4 mr-3'/>
        <div className='py-4 overflow-hidden overflow-y-auto '>
            <div className='pr-3 pl-0.5 max-h-[calc(100vh-80px)]' >
                <div className='space-y-4'>
                    <FilterPriceRange onSubmit={onSubmitPrice} clearForm={clearForm} />
                    <hr />
                </div>
            </div>
        </div>
    </div>
  )
}