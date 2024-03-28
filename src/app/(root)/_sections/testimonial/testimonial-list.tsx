import React from 'react'
import Image from 'next/image'

const DATA = [
    {
        icon: '/images/services/service1.png',
        title: 'Đủ tiêu chuẩn',
        des: 'Thuốc chất lượng, phục vụ tận tình'
    },
    {
        icon: '/images/services/service2.png',
        title: 'Giao hàng siêu tốc',
        des: 'Giao tận nhà hoặc nhận tại nhà thuốc'
    }, 
    {
        icon: '/images/services/service3.png',
        title: 'Miễn phí Vận chuyển',
        des: 'Cho mọi đơn hàng toàn quốc'
    }, 
    {
        icon: '/images/services/service4.png',
        title: 'Hệ thống nhà thuốc toàn quốc',
        des: 'Dễ dàng tìm nhà thuốc gần bạn'
    },
]

export const TestimonialList = () => {
  return (
    <div className='flex justify-between items-center'>
        {DATA?.map((item, index) => (
            <div
                key={index}
                className='flex items-center gap-x-2'
            >
                <Image src={item.icon} alt='' width={40} height={40} />
                <div className='flex flex-col gap-y-0.5'>
                    <p className='text-[#0072bc] text-sm font-bold'>{item.title}</p>
                    <p className='text-[#787878] text-xs'>{item.des}</p>
                </div>
            </div>
        ))}
    </div>
  )
}