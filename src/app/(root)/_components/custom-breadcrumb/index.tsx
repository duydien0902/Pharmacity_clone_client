'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { BreadcrumbItemProps } from '@/types/bread-crumb'
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface CustomBreadcrumbProps {
  breadcrumb: BreadcrumbItemProps[]
}

export const CustomBreadcrumb = ({ breadcrumb }: CustomBreadcrumbProps) => {
  const paths = usePathname();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb?.map((item, index) => (
          <React.Fragment key={index}>
            {index !== 0 &&  <BreadcrumbSeparator />}
            {item.href === paths ? 
              <BreadcrumbItem>
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              </BreadcrumbItem>
              :
              <BreadcrumbItem>
                <Link href={item.href}>
                  <span className='hover:text-[#2b2b2b] transition-all duration-200 ease-in-out'>
                    {item.label}
                  </span>
                </Link>
              </BreadcrumbItem>
            }
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}