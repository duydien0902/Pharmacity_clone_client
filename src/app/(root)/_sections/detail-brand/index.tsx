'use client'

import React, { Suspense, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/ui/container'
import { Box } from '@/components/ui/box'

import { SortPrice } from '../../_components/sort-price'
import { ProductsList } from '../type-products/_components/products-list'
import { CustomPagination } from '../../_components/custom-pagination'
import { FilterBrandDetail } from './_components/filter-brand-detail'

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

export const DetailBrand = ({ title }: {title: string}) => {
  const [currentPage, SetcurrentPage] = useState<any>(1)
  const onPageChange = (v: number | string) => {
    SetcurrentPage(v)
  }

  return (
    <section className='bg-white'>
          <Container>
              <Box className='py-6'>
                  <div className='relative grid grid-cols-12 gap-x-3'>
                    <div className='col-span-2'>
                      <Suspense>
                        <FilterBrandDetail />
                      </Suspense>
                    </div>
                    <div className='col-span-10'>
                      <div className='p-4 mb-6 border border-[#e5e7eb] rounded-[8px] shadow-lg flex gap-x-4 items-start'>
                        <div className='bg-white overflow-hidden rounded-[8px] shadow-lg w-full h-full max-w-[136px] max-h-[136px]'>
                          <Image src={'/images/products/product1.png'} alt='' width={136} height={136} />
                        </div>
                        <div className='space-y-4'>
                          <h2 className='text-2xl font-bold'>{title}</h2>
                          <p>
                          Trải qua hơn 20 năm nỗ lực nghiên cứu và phát triển bởi các chuyên gia, các nhà khoa học hàng đầu Nhật Bản trong lĩnh vực làm đẹp, 82X ra đời như một bước tiến vượt bậc về sản phẩm chăm sóc, trẻ hóa da từ bên trong. Ngay từ khi ra mắt, thương hiệu nước uống đẹp da 82X của Công ty Mashiro đã tạo nên một cơn sốt mạnh mẽ ở Nhật Bản và các nước Châu Á lân cận, trong vòng 8 phút lại có 1 chai 82X được tiêu thụ trên thị trường. Tại Việt Nam, 82X nhanh chóng chinh phục được cả những khách hàng khó tính nhất và khẳng định vị thế đứng đầu trong dòng sản phẩm làm đẹp da cao cấp bởi hàm lượng vượt trội, thành phần thiên nhiên cực kì lành tính và hiệu quả rõ rệt trong việc gìn giữ nét thanh xuân tươi trẻ rạng ngời của phụ nữ hiện đại.
                          </p>
                        </div>
                      </div>
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

