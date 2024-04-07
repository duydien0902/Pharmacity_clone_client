'use client'

import React from 'react'

import { cn } from '@/lib/utils'

import { usePagination } from '@/hooks/usePagination';

import { PaginationProps } from '@/types/pagination';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export const CustomPagination = ({
    onPageChange = () => {},
    totalCount,
    pageSize=10,
    siblingCount=1,
    currentPage 
}: PaginationProps) => {

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={onPrevious} className='cursor-pointer'>
            {currentPage === 1 ? null : <PaginationPrevious size='icon' />}
        </PaginationItem>
        {paginationRange?.map((pageNumber: number | string, index: number) => {
            if (pageNumber === 'DOTS') {
                return <PaginationEllipsis key={index} />
            }
            return (
                <PaginationItem
                    onClick={() => onPageChange(pageNumber)}
                    key={index}
                >
                    <PaginationLink 
                        className={cn(('cursor-pointer font-bold hover:text-[#0072bc] hover:bg-[#ebebeb]'), {
                            'bg-[#ebebeb] text-[#0072bc]': pageNumber === currentPage
                        })}
                        // href='/'
                    >
                        {pageNumber}
                    </PaginationLink>
                </PaginationItem>
            )
        })}
        <PaginationItem onClick={onNext} className='cursor-pointer'>
            {currentPage === lastPage ? null : <PaginationNext size='icon'/>}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};