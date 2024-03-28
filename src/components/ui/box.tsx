import React from 'react'

import { cn } from '@/lib/utils'

interface BoxProps {
    className?: string,
    children: React.ReactNode
}

export const Box = ({ className, children }: BoxProps) => {
    return (
        <div className={cn('py-4 bg-white', className)}>{children}</div>
    )
}