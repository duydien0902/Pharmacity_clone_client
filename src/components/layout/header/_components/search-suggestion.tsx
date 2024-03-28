'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DATA = {
    footerForm: [
        {
            label: 'Canxi hữu cơ',
            id:'1'
        },
        {
            label: 'Nhỏ mắt',
            id:'2'
        },
        {
            label: 'Bổ sung canxi',
            id:'3'
        },
        {
            label: 'Ngừa mụn',
            id:'4'
        },
        {
            label: 'Men vi sinh',
            id:'5'
        },
    ],
    contentForm: [
        {
            label: 'Hạt dinh dưỡng hỗn hợp Dan',
            id:'1'
        },
        {
            label: 'Dung dịch uống-Cure 25000IU điều trị thiếu vitamin (4 ống x 1 ml)',
            id:'2'
        },
        {
            label: 'Nước bổ sung vitamin C, svị xoài Daily - C (140ml)',
            id:'3'
        },
        {
            label: 'Kẹo dẻo bổ sung Calci Vitamin Ích Nhi (24g)',
            id:'4'
        },
        {
            label: 'Kem đánh răng P/S trà xanh (180g)',
            id:'5'
        },
        {
            label: 'Hạt dinh dưỡng hỗn hợp Dan',
            id:'1'
        },
        {
            label: 'Dung dịch uống-Cure 25000IU điều trị thiếu vitamin (4 ống x 1 ml)',
            id:'2'
        },
        {
            label: 'Nước bổ sung vitamin C, svị xoài Daily - C (140ml)',
            id:'3'
        },
        {
            label: 'Kẹo dẻo bổ sung Calci Vitamin Ích Nhi (24g)',
            id:'4'
        },
        {
            label: 'Kem đánh răng P/S trà xanh (180g)',
            id:'5'
        },
        {
            label: 'Hạt dinh dưỡng hỗn hợp Dan',
            id:'1'
        },
        {
            label: 'Dung dịch uống-Cure 25000IU điều trị thiếu vitamin (4 ống x 1 ml)',
            id:'2'
        },
        {
            label: 'Nước bổ sung vitamin C, svị xoài Daily - C (140ml)',
            id:'3'
        },
        {
            label: 'Kẹo dẻo bổ sung Calci Vitamin Ích Nhi (24g)',
            id:'4'
        },
        {
            label: 'Kem đánh răng P/S trà xanh (180g)',
            id:'5'
        },
        {
            label: 'Hạt dinh dưỡng hỗn hợp Dan',
            id:'1'
        },
        {
            label: 'Dung dịch uống-Cure 25000IU điều trị thiếu vitamin (4 ống x 1 ml)',
            id:'2'
        },
        {
            label: 'Nước bổ sung vitamin C, svị xoài Daily - C (140ml)',
            id:'3'
        },
        {
            label: 'Kẹo dẻo bổ sung Calci Vitamin Ích Nhi (24g)',
            id:'4'
        },
        {
            label: 'Kem đánh răng P/S trà xanh (180g)',
            id:'5'
        },
    ]
}

export const SearchSuggestion = ({ input }: {input: string}) => {
  return (
    <div className='p-5'>
        {!input?
            <div className='flex items-center justify-between'>
                <h2 className='text-[#2b2b2b] font-bold'>Blackmores tưng bừng ưu đãi</h2>
                {/* <Image src={'/images/search.png'} alt='' width={142} height={30}/> */}
                <p>Logo</p>
            </div> 
            :
            <div className='max-h-[460px] overflow-y-scroll h-full'>
            <ul className='flex flex-col gap-y-2'>
                    {DATA?.contentForm?.map((item) => (
                        <Link href={'/'} key={item.id}>
                            <li className='p-2 hover:bg-[#e3f7fc] text-sm'>
                                <p>{item.label}</p>
                            </li>
                        </Link>
                    ))}
            </ul>
            </div>
        }
        <hr className='my-5'/>
        <div>
            <h3 className='test-sm text-[#2b2b2b] '>Tìm kiếm phổ biến</h3>
            <div className='mt-5'>
                <ul className='flex gap-x-3'>
                    {DATA?.footerForm?.map(item => (
                        <Link href={'/'} key={item.id}>
                            <li className='px-2 py-1.5 border border-[#0072bc] text-[#0072bc] text-sm rounded-full hover:bg-[#e3f7fc]'>
                                <p>{item.label}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}