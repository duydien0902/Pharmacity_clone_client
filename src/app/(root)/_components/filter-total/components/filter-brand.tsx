'use client'

import React, { useState, useEffect } from 'react'

import { Input } from '@/components/ui/search'
import { Checkbox } from '@/components/ui/checkbox'

const DATA = [
  {
    id: 20,
    label: 'Công ty TNHH DƯỢC phẩm'
  },
  {
    id: 21,
    label: 'Công ty TNHH dược fake'
  },
  {
    id: 22,
    label: 'Siu Guan'
  },
  {
    id: 23,
    label: 'Abbott'
  },
  {
    id: 5,
    label: 'Abbott Laboratories'
  },
  {
    id: 6,
    label: 'ABC Farmaceutici'
  },
  {
    id: 7,
    label: 'Acme Formulation'
  },
  {
    id: 8,
    label: 'Actavis'
  },
  {
    id: 9,
    label: 'Aeropharm'
  },
  {
    id: 10,
    label: 'Agi'
  },
  {
    id: 11,
    label: 'Agimexpharm'
  },
  {
    id: 12,
    label: 'AGIPHARM'
  },
  {
    id: 13,
    label: 'Alaxan'
  },
  {
    id: 14,
    label: 'Alcon Pharmaceuticals'
  },
  {
    id: 15,
    label: 'Alergan'
  },
]

interface FilterBrandProps {
  clearForm: boolean,
  handleCheckbox: (v: []) => void
}

export const FilterBrand = ({ clearForm, handleCheckbox }: FilterBrandProps) => {
  const [visibleItems, setVisibleItems] = useState(5)
  const [checkedItems, setCheckedItems] = useState<any>([])
  const [isGetvalue, setIsGetValue] = useState(false)

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 5)
  };

  useEffect(() => {
    setCheckedItems([]);
  }, [clearForm])

  useEffect(() => {
    if(isGetvalue) handleCheckbox?.(checkedItems)
  }, [checkedItems])

  const onCheckboxChange = ({checked, value}: any) => {
    if (checked) {
      setCheckedItems([...checkedItems, value])
      setIsGetValue(true)
    }else {
      setCheckedItems((prev: []) => {
        return prev.filter((id: number) => id!==value)
      })
      setIsGetValue(true)
    }
  }

  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-sm'>Thương hiệu(0)</h3>
      <div className='flex items-center justify-between border border-[#787878] rounded-[8px] py-1.5 px-2'>
        <Input 
          className='h-6  focus-visible:ring-0 border-none shadow-none p-0'
          placeholder='Nhập tên thương hiệu'
        />
      </div>
      {DATA?.slice(0, visibleItems)?.map(item => (
        <div key={item.id} className='space-x-2.5'>
            <div className="flex items-center space-x-2.5">
              <Checkbox
                className='border-[#e5e7eb] hover:border-[#185abc] data-[state=checked]:bg-[#185abc]'
                id={`${item.id}`}
                checked={checkedItems.includes(item.id)}
                onCheckedChange={(checked) => onCheckboxChange({checked, value: item.id})}
                value={item.id}
              />
              <label
                htmlFor={`${item.id}`}
                className="line-clamp-1 py-0.5 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {item.label}
              </label>
            </div>
        </div>
      ))}
      {visibleItems < DATA.length &&
        <div>
          <p
            className='text-center text-[#0070e0] font-medium cursor-pointer hover:text-[#005596]'
            onClick={handleShowMore}
          >
            Xem thêm
          </p>
        </div>
      }
    </div>
  )
}