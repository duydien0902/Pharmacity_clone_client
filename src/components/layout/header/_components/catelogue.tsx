import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Container } from '@/components/ui/container'

const DATA = {
    category: [
      {
        label: 'Thuốc',
        icon: '/images/category/cham-soc-ca-nhan.png',
        id: 0,
        data:[
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/cham-soc-ca-nhan.png'
          },
        ]
      },
      {
        label: 'Thực phẩm chức năng',
        id: 1,
        icon: '/images/category/cham-soc-sac-dep.png',
        data:[
          {
            id: 1,
            name: 'TPCN Chăm sóc sắc đẹp',
            imgUrl: '/images/category/cham-soc-sac-dep.png'
          },
          {
            id: 2,
            name: 'TPCN Nhóm tin mạch',
            imgUrl: '/images/category/cham-soc-sac-dep.png'
          },
        ]
      },
      {
        label: 'Chăm sóc cá nhân',
        id: 3,
        icon: '/images/category/cham-soc-suc-khoe.png',

        data:[
          {
            id: 1,
            name: 'Chăm sóc cá nhân',
            imgUrl: '/images/category/cham-soc-suc-khoe.png'
          },
          {
            id: 2,
            name: 'Chăm sóc cá nhân',
            imgUrl: '/images/category/cham-soc-suc-khoe.png'
          },
        ]
      },
      {
        label: 'Mẹ và bé',
        icon: '/images/category/thuc-pham-chuc-nang.png',
        id: 4,
        data:[
          {
            id: 1,
            name: 'Mẹ và bé',
            imgUrl: '/images/category/thuc-pham-chuc-nang.png'
          },
          {
            id: 2,
            name: 'Mẹ và bé',
            imgUrl: '/images/category/thuc-pham-chuc-nang.png'
          },
        ]
      },
      {
        label: 'Thuốc',
        icon: '/images/category/khuyen-mai.png',
        id: 5,
        data:[
          {
            id: 1,
            name: 'Thuốc không kê đơn',
            imgUrl: '/images/category/khuyen-mai.png'
          },
          {
            id: 2,
            name: 'Thuốc kê đơn',
            imgUrl: '/images/category/khuyen-mai.png'
          },
        ]
      },
      {
        label: 'Thực phẩm chức năng',
        icon: '/images/category/me-va-be.png',
        id: 6,
        data:[
          {
            id: 1,
            name: 'TPCN Chăm sóc sắc đẹp',
            imgUrl: '/images/category/me-va-be.png'
          },
          {
            id: 2,
            name: 'TPCN Nhóm tin mạch',
            imgUrl: '/images/category/me-va-be.png'
          },
        ]
      },
      {
        label: 'Chăm sóc cá nhân',
        icon: '/images/category/pharmacity.png',
        id: 7,
        data:[
          {
            id: 1,
            name: 'Chăm sóc cá nhân',
            imgUrl: '/images/category/pharmacity.png'
          },
          {
            id: 2,
            name: 'Chăm sóc cá nhân',
            imgUrl: '/images/category/pharmacity.png'
          },
        ]
      },
      {
        label: 'Mẹ và bé',
        icon: '/images/category/san-pham-tien-loi.png',
        id: 8,
        data:[
          {
            id: 1,
            name: 'Mẹ và bé',
            imgUrl: '/images/category/san-pham-tien-loi.png'
          },
          {
            id: 2,
            name: 'Mẹ và bé',
            imgUrl: '/images/category/san-pham-tien-loi.png'
          },
        ]
      },
    ],
    bannerDeal: '/images/category/banner-deal.png'
}

export const Catelogue = () => {
  const [value, setValue] = useState(0)
  const [dataFilter, setDataFilter] = useState<any>([])
  
  useEffect(() => {
    const result = DATA.category.filter(i => i.id === value)
    setDataFilter(result)
  }, [value])

  return (
    <div className='absolute z-20 top-[100%] left-0 w-full bg-white shadow-lg'>
        <Container className='grid grid-cols-10'>
            <div className='col-span-2  relative after:absolute after:content-[""] after:w-[1px] after:bg-gray-200 after:top-0 after:right-0 after:bottom-0'>
              <div className='py-6 max-h-[60vh] overflow-y-scroll h-full pl-2 pr-5 '>
                <ul className='flex flex-col gap-y-3'>
                  {DATA?.category?.map((item, index) => (
                    <li 
                      className={cn('flex gap-x-1 items-center px-2 py-3 hover:bg-[#e3f7fc] hover:text-[#0072bc] cursor-pointer text-sm font-semibold text-[#2b2b2b] rounded-[4px]',{
                        'bg-[#e3f7fc] text-[#0072bc]': item.id === value
                      })}
                      onClick={() => setValue(item.id)}
                    >
                      <Image src={item.icon} alt='icon' width={36} height={36} />
                      <p>{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='py-6 px-4 col-span-6 max-h-[60vh] overflow-y-auto'>
              <div className='flex gap-4 flex-wrap'>
                {dataFilter[0]?.data?.map((item: any, index: any) => (
                  <div className='text-[#2b2b2b] flex flex-col items-center cursor-pointer' key={index}>
                    <div className='border border-gray-200 rounded-[8px] flex items-center '>
                      <Image src={item.imgUrl} alt='icon' width={97} height={97} />
                    </div>
                    <p className='text-sm max-w-24 text-center w-full'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='py-6 col-span-2'>
              <div className='relative aspect-[261/488] cursor-pointer'>
                 <Image src={DATA.bannerDeal} alt='icon' quality={100} fill />
              </div>
            </div>
        </Container>
    </div>
  )
}