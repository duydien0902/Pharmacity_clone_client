import React from 'react'

import { cn } from '@/lib/utils'

interface TitleProps {
    className?: string,
    children: React.ReactNode
}

export const Title = ({ className, children }: TitleProps) => {
  return (
    <div className={cn('text-[#2b2b2b] text-xl font-bold', className)}>{children}</div>
  )
}