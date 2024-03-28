import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BannerBlogListProps {
    data: {

    }[]
}

export const BannerBlogList = ({ data }: BannerBlogListProps) => {
    const hightLight: any = data[0]
    const listData: any = data.slice(1)

  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-6 pb-14'>
        <div className='first:row-span-3 block'>
            <Link href={'/'}>
                <div className='-mb-10'>
                    <div className='mb-2 relative aspect-[389/291] overflow-hidden rounded-[4px]' >
                        {hightLight?.thumbnail &&
                            <Image src={hightLight?.thumbnail} alt='' fill className='object-cover' />
                        }
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='flex items-center gap-x-2'>
                            {hightLight?.tag.map((item: any, index: any) => (
                                <div 
                                    key={index}
                                    className='px-1 py-0.5 cursor-pointer text-white font- text-xs bg-[#525252] rounded-[4px]'
                                >
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <h3 className='font-semibold text-[#2b2b2b]'>{hightLight?.title}</h3>
                        <p className='line-clamp-2 text-sm text-[#2b2b2b]'>{hightLight?.description}</p>
                    </div>
                </div>
            </Link>
        </div>
        {listData?.map((item: any, index: any) => (
            <div className='first:row-span-3' key={index}>
                <Link href={'/'}>
                    <div className=' flex items-start justify-start space-x-2'>

                        <div className='relative aspect-[389/291] w-[144px] h-full overflow-hidden rounded-[4px]' >
                            <Image src={item.thumbnail} alt='' fill className='object-cover' />
                        </div>
                        <div className='flex flex-1 flex-col gap-y-0.5'>
                            <div className='flex items-center gap-x-2'>
                                {item.tag.map((item: any, index: any) => (
                                    <div 
                                        key={index}
                                        className='px-1 py-0.5 cursor-pointer text-white font- text-xs bg-[#525252] rounded-[4px]'
                                    >
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                            <h3 className='font-semibold text-[#2b2b2b]'>{item.title}</h3>
                            <p className='line-clamp-2 text-sm text-[#2b2b2b]'>{item.description}</p>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
        
    </div>
  )
}