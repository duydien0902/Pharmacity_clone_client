import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { FaHeart } from "react-icons/fa6";

import { ProductCardProps } from '@/types/product-card';

export const ProductCard = ({ item }: {item: ProductCardProps}) => {
  const { id, discount, thumbnail, gift, voucher, flash_ship, title, basis_price, price, like, sold, trending } = item
  return (
    <Link href={`/`}> 
        <div className='relative mx-auto'>
            {discount &&
                <div className='absolute mt-2 -ml-1 pb-0.5 block before:absolute before:content-[""] before:top-0 before:left-0 before:w-1 before:h-full before:rounded-l-[4px] before:mt-[1px] before:bg-[#a10b42] before:z-[1]'>
                    <div className='py-1'>
                        <span className='text-[12px] relative px-[7px] py-1 rounded-[4px] bg-[#c71852] text-white z-[2]'>Giảm {discount}%</span>
                    </div>
                </div>
            }
            <div className='bg-white overflow-hidden max-w-[185px] w-full rounded-[8px] cursor-pointer border border-[#e2e8f0]'>
                <div className='relative'>
                    <div className='relative aspect-square w-full max-h-[185px]'>
                        <Image src={thumbnail} alt='' fill className='bg-cover bg-center'  />
                    </div>
                    <div className='absolute left-0 bottom-0 flex'>
                        {gift && <Image src={'/images/products/tags/gift.png'} alt='gift' width={52} height={26} className='' />}
                        {voucher && <Image src={'/images/products/tags/voucher.png'} alt='gift' width={52} height={26} className='' />}
                        {flash_ship && <Image src={'/images/products/tags/flash-ship.png'} alt='gift' width={52} height={26} className='' />}
                    </div>
                </div>
                <div className='p-2 pb-3 flex flex-col gap-y-1 text-sm'>
                    <h4 className='text-[#2b2b2b] font-semibold line-clamp-2'>{title}</h4>
                    <div className='h-5'>
                        {basis_price && 
                            <p className='text-[#9e9e9e] font-bold line-through '>{basis_price} <span className=' underline'>đ</span></p>
                        }
                    </div>
                    <p className='text-[#0072bc] text-base font-bold'>{price} <span className='underline'>đ</span>/Chai</p>
                    <div className='text-[#2b2b2b] font-semibold flex items-center gap-x-1'>
                        <div className='flex items-center gap-x-1'>
                            <FaHeart color='#2b2b2b' />
                            <p>{like}k</p>
                        </div>
                        <span className='h-5 w-0.5 bg-[#9e9e9e]' />
                        <p>Đã bán {sold}k</p>
                    </div>
                    <div className='h-4 mt-3.5'>
                        {trending && 
                            <div className='relative h-full z-0 rounded-full w-full overflow-hidden bg-[#f2222280]'>
                                <div className='bg-[#f22222] absolute left-0 top-0 h-full z-[1] w-[95%] rounded-full '>
                                    <p className='absolute text-[12px] left-0 top-0 right-0 bottom-0 text-white font-bold flex justify-center items-center py-[1px]'>Đang bán chạy</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}