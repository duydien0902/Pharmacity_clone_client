'use client'

import React, { useState, Suspense } from 'react'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'

import { CustomPagination } from '../../_components/custom-pagination'
import { FilterTotal } from '../../_components/filter-total'
import { SortPrice } from '../../_components/sort-price'

import { ProductsList } from './_components/products-list'

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
    {
      id: 7,
      discount: '50',
      thumbnail: '/images/products/product6.png',
      // gift: true,
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
      id: 8,
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
      id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
  {
    id: 13,
    discount: '50',
    thumbnail: '/images/products/product6.png',
    // gift: true,
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
    id: 14,
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
    id: 15,
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
]

export const TypeProducts = () => {
  const [currentPage, SetcurrentPage] = useState<any>(1)
  const onPageChange = (v: number | string) => {
    SetcurrentPage(v)
  }
  
  return (
    <section className='bg-white mt-4'>
        <Container>
            <Box>
                <div className='relative grid grid-cols-12 gap-x-3'>
                    <div className='col-span-2'>
                      <Suspense>
                        <FilterTotal />
                      </Suspense>
                    </div>
                    <div className='col-span-10'>
                        <div className='flex gap-x-3 justify-start items-center pb-4'>
                          <SortPrice />
                        </div>
                        <div>
                          <ProductsList data={DATA} />
                          <div className='flex justify-center'>
                            <CustomPagination 
                              onPageChange={onPageChange}
                              currentPage={currentPage}
                              totalCount={1005}
                              pageSize={10}
                            />
                          </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    </section>
  )
}