import React from 'react'

import { ServiceItem } from './service-item'

const DATA = [
    {
        icon: '/images/services/service1.png',
        title: 'Đặt thuốc theo đơn',
        url: '/'
    },
    {
        icon: '/images/services/service2.png',
        title: 'Đặt lịch khám',
        url: '/'
    },
    {
        icon: '/images/services/service3.png',
        title: 'Xét nghiệm gen',
        url: '/'
    },
    {
        icon: '/images/services/service4.png',
        title: 'Mã khuyến mãi',
        url: '/'
    },
    {
        icon: '/images/services/service5.png',
        title: 'Deal hót tháng 3',
        url: '/'
    },
    {
        icon: '/images/services/service6.png',
        title: 'Lịch sử P-xu vàng',
        url: '/'
    },
    {
        icon: '/images/services/service7.png',
        title: 'Hệ thống nhà thuốc',
        url: '/'
    },
    {
        icon: '/images/services/service8.png',
        title: 'Tư vấn trực tuyến',
        url: '/'
    },
]

export const ServicesList = () => {
  return (
    <div className='flex justify-between px-6'>
        {DATA?.map((item, index) => (
            <ServiceItem item={item} key={index} />
        ))}
    </div>
  )
}