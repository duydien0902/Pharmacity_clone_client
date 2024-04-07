'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

import { FilterPriceRange } from './components/filter-price-range'
import { FilterBrand } from './components/filter-brand'

export const FilterTotal = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const [clearForm, setClearForm] = useState(false)
    const [filters, setFilters] = useState<{brands: number[] | [], price_from: string, price_to: string}>({
        price_from: '',
        price_to: '',
        brands: [],
    });

    useEffect(() => {
        const currentPriceFrom = searchParams.get('price_from') || '';
        const currentPriceTo = searchParams.get('price_to') || '';
        const currentBrands = searchParams.getAll('brands[]');

        setFilters({
            price_from: currentPriceFrom,
            price_to: currentPriceTo,
            brands: currentBrands.map(Number)
        });
    }, [searchParams]);
    
   
    const onSubmitPrice = (v: {valueMin: string, valueMax: string}) => {
        const { valueMin, valueMax } = v;
       
        if (valueMin !== '' && valueMax !== '') {
            const currentBrands = searchParams.getAll('brands[]');
            const queryString = `price_from=${valueMin}&price_to=${valueMax}` +
              (currentBrands.length > 0 ? `&brands[]=${currentBrands.join('&brands[]=')}` : '');
        
            const url = `${pathname}?${queryString}`;
            router.push(url, { scroll: false });
        } 
    }

    const handleCheckbox = (selectedBrands: number[]) => {
        
        const { price_from, price_to } = filters;
        let queryString = '';

        if (selectedBrands.length > 0) {
            queryString = `brands[]=${selectedBrands.join('&brands[]=')}`;
        if (price_from !== '' && price_to !== '') {
            queryString = `price_from=${price_from}&price_to=${price_to}&${queryString}`;
        }
        } else if (price_from !== '' && price_to !== '') {
            queryString = `price_from=${price_from}&price_to=${price_to}`;
        }

        const url = `${pathname}${queryString ? `?${queryString}` : ''}`;
        router.push(url, { scroll: false });
    }

    const handleClearForm = () => {
        setClearForm(!clearForm)
        setFilters({
            price_from: '',
            price_to: '',
            brands: [],
        });
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
                    <FilterBrand  clearForm={clearForm} handleCheckbox={handleCheckbox}/>
                </div>
            </div>
        </div>
    </div>
  )
}