import React, { useState } from 'react'

import { cn } from '@/lib/utils'

import { BUTTON_PRICE } from '@/utils/constants'

import { Button } from '@/components/ui/button'

export const SortPrice = () => {
  const [isActive, setIsActive] = useState<null | string>(null)

  return (
    <div className='flex gap-x-3 justify-start items-center pt-[5px]'>
        <p className='text-sm text-[#2b2b2b] font-medium'>Sắp xếp theo:</p>
        <div className='space-x-3'>
            <Button 
                className={cn('text-[#787878] text-sm bg-inherit hover:bg-inherit shadow-none border border-[#787878] hover:border-[#525252] hover:text-[#525252] h-8 px-3', {
                    'text-[#0072bc] border-[#0072bc] hover:text-[#6dc0e3] hover:border-[#6dc0e3]': isActive === BUTTON_PRICE.PRICES_GRADUALLY_DECREASE
                })}
                onClick={() => setIsActive(BUTTON_PRICE.PRICES_GRADUALLY_DECREASE)}
            >
                {BUTTON_PRICE.PRICES_GRADUALLY_DECREASE}
            </Button>
            <Button
                className={cn('text-[#787878] text-sm bg-inherit hover:bg-inherit shadow-none border border-[#787878] hover:border-[#525252] hover:text-[#525252] h-8', {
                    'text-[#0072bc] border-[#0072bc] hover:text-[#6dc0e3] hover:border-[#6dc0e3]': isActive === BUTTON_PRICE.PRICES_GRADUALLY_INCREASE
                })}
                onClick={() => setIsActive(BUTTON_PRICE.PRICES_GRADUALLY_INCREASE)}
            >
                {BUTTON_PRICE.PRICES_GRADUALLY_INCREASE}
            </Button>
        </div>
    </div>
  )
}