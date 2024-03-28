'use client'

import React, { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'

import { BannerBlogTopics } from '@/app/(root)/_components/banner-blog-topics'

const DATA = [
    {
        lable: 'Bài viết nổi bật',
        id: 1,
        data: [
            {
                thumbnail: '/images/health/health1.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },
            {
                thumbnail: '/images/health/health2.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },
            {
                thumbnail: '/images/health/health2.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },
            {
                thumbnail: '/images/health/health2.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },
            {
                thumbnail: '/images/health/health2.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },
            {
                thumbnail: '/images/health/health2.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },
            {
                thumbnail: '/images/health/health2.png',
                tag: ['sống khỏe', 'làm đẹp'],
                title: 'Các cách hết nghẹt mũi hiệu quả, nhanh chóng [Chi tiết]',
                description: 'Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp, Tình trạng nghẹt mũi xảy ra ở mọi lứa tuổi và nếu không được chữa trị kịp sẽ dễ dẫn đến bệnh viêm xoang cấp'
            },

        ]
    },
    {
        lable: 'Tin tức',
        id: 2,
        data: []
    },
    {
        lable: 'Sống khỏe',
        id: 3,
        data: []
    },
    {
        lable: 'Mẹ và bé',
        id: 4,
        data: []
    },
    {
        lable: 'Làm đẹp',
        id: 5,
        data: []
    },
    {
        lable: 'Gia đình & giới tính',
        id: 6,
        data: []
    },
    {
        lable: 'Dinh dưỡng',
        id: 7,
        data: []
    },
    {
        lable: 'COVID-19',
        id: 8,
        data: []
    },
    {
        lable: 'Bệnh ung thư',
        id: 9,
        data: []
    },
    {
        lable: 'Bênh thường gặp',
        id: 10,
        data: []
    },
    {
        lable: 'Bênh mãn tính',
        id: 11,
        data: []
    },
]

export const BlogTopics = () => {
    const [isActive, setIsActive] = useState<number>(1)
    const [dataFilter, setDataFilter] = useState<any>([])

    useEffect(() => {
        const result = DATA.filter((item) => item.id === isActive)
        setDataFilter(result[0]?.data)
    }, [isActive])

  return (
    <div>     
        <div className='overflow-hidden'>
            <div className='flex py-5 items-center gap-x-4 overflow-x-auto scrollbar-hide scrollbar-hide'>
                {DATA?.map((item, index) => (
                    <div 
                        className={cn('px-4 py-2 cursor-pointer whitespace-nowrap rounded-full text-sm font-bold text-[#2b2b2b] bg-[#ebebeb] hover:bg-[#dedede]',{
                            'text-[#0072bc] bg-[#e3f7fc]': index + 1 === isActive
                        })}
                        key={index}
                        onClick={() => setIsActive(item.id)}
                    >
                        <p>{item.lable}</p>
                    </div>
                ))}
            </div>
        </div>
        <BannerBlogTopics data={dataFilter} />
    </div>
  )
}