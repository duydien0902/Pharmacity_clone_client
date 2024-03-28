import React from 'react'

import { ProductsSlider } from '../../_components/products-slider'

const DATA = [
    {
      id: 1,
      discount: '20',
      thumbnail: '/images/products/product1.png',
      gift: true,
      voucher: true,
      flash_ship: true,
      title: 'Nước súc miệng Listerine Coolmint (750ml)',
      basis_price: '163.000',
      price: '114.100',
      like: '73.2',
      sold: '56.2',
      trending: true
    },
    {
      id: 2,
      discount: '30',
      thumbnail: '/images/products/product2.png',
      gift: true,
      voucher: true,
      flash_ship: true,
      title: 'Bộ đôi nước súc miệng Listerine Cool Mint (Chai 750ml)',
      basis_price: '215.000',
      price: '172.000',
      like: '76.2',
      sold: '47.3',
      trending: true
    },
    {
      id: 3,
      // discount: '30',
      thumbnail: '/images/products/product3.png',
      gift: true,
      // voucher: true,
      flash_ship: true,
      title: 'Viên uống Pharmacity Hoạt Huyết tăng cường tuần hoàn máu não (Hộp 3 vỉ x 10 viên)',
      basis_price: '215.000',
      price: '172.000',
      like: '76.2',
      sold: '47.3',
      trending: true
    },
    {
      id: 4,
      // discount: '30',
      thumbnail: '/images/products/product4.png',
      gift: true,
      voucher: true,
      // flash_ship: true,
      title: 'Viên uống Pharmacity Hoạt Huyết tăng cường tuần hoàn máu não (Hộp 3 vỉ x 10 viên)',
      basis_price: '215.000',
      price: '172.000',
      like: '76.2',
      sold: '47.3',
      trending: true
    },
    {
      id: 5,
      // discount: '30',
      thumbnail: '/images/products/product5.png',
      gift: true,
      // voucher: true,
      flash_ship: true,
      title: 'Viên uống Pharmacity Hoạt Huyết tăng cường tuần hoàn máu não (Hộp 3 vỉ x 10 viên)',
      basis_price: '215.000',
      price: '172.000',
      like: '76.2',
      sold: '47.3',
      trending: true
    },
    {
      id: 6,
      discount: '50',
      thumbnail: '/images/products/product6.png',
      // gift: true,
      // voucher: true,
      // flash_ship: true,
      title: 'Viên uống Pharmacity Hoạt Huyết tăng cường tuần hoàn máu não (Hộp 3 vỉ x 10 viên)',
      basis_price: '215.000',
      price: '172.000',
      like: '76.2',
      sold: '47.3',
      trending: true
    },
  
]

export const BestProductsSlider = () => {
  return (
    <div className='mt-4'>
        <ProductsSlider data={DATA}/>
    </div>
  )
}
