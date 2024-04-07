'use client'

import React, { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'

import { formatPrice } from '@/utils/formatUtils'

import { Input } from '@/components/ui/search'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const DATA = [
  {
    id: 1,
    label: {
      min : 100000,
      max: null
    }
  },
  {
    id: 2,
    label: {
      min : 100000,
      max: 300000
    }
  },
  {
    id: 3,
    label: {
      min : 300000,
      max: 500000
    }
  },
  {
    id: 4,
    label: {
      min : null,
      max: 500000,
    }
  },
]

const getRadioLabel = (label: { min: number | null; max: number | null }): string => {
  if (!label.min && label.max) {
    return `Trên ${formatPrice(label.max)}`;
  } else if (label.min && !label.max) {
    return `Dưới ${formatPrice(label.min)}`;
  } else if (label.min && label.max) {
    return `${formatPrice(label.min)} - ${formatPrice(label.max)}`;
  } else {
    return 'Tất cả';
  }
}

interface FilterPriceRangeProps { 
  onSubmit: (v: {valueMin: string, valueMax: string}) => void,
  clearForm: boolean
}

export const FilterPriceRange = ({ onSubmit, clearForm }: FilterPriceRangeProps) => {
  const [valueMin, setValueMin] = useState('')
  const [valueMax, setValueMax] = useState('')
  const [valueRadio, setValueRadio] = useState<any>('')

  useEffect(() => {
    setValueMin('')
    setValueMax('')
    setValueRadio(null)
  }, [clearForm])

  const handleChangeMin =  (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^\d]/g, '');

    if (/^\d*\.?\d*$/.test(inputValue)) {
      if (inputValue.length <= 10) {
        const formattedValue = formatPrice(inputValue);
        setValueMin(formattedValue);
        if(valueMin !== inputValue) {
          setValueRadio(null)
        }
      }
    }
  }

  const handleChangeMax =  (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^\d]/g, '');

    if (/^\d*\.?\d*$/.test(inputValue)) {
      if (inputValue.length <= 10) {
        const formattedValue = formatPrice(inputValue);
        setValueMax(formattedValue);
        if(valueMax !== inputValue) {
          setValueRadio(null)
        }
      }
    }
  }

  const handleRadio = (value: any) => {
    setValueRadio(value)
    const result = DATA.find(item => item.id.toString() === value)
    if(result?.label.max || result?.label.min) {
      const dataRadio = result?.label

      if (!dataRadio?.min) {
        setValueMin(formatPrice(0))
        setValueMax(formatPrice(dataRadio?.max))
      } else if (!dataRadio?.max) {
        setValueMin(formatPrice(dataRadio?.min))
        setValueMax(formatPrice(0))
      } else {
        setValueMin(formatPrice(dataRadio?.min))
        setValueMax(formatPrice(dataRadio?.max))
      }
    }
  }

  return (
    <div className='flex flex-col space-y-4'>
      <h3 className='font-bold text-sm'>Khoảng giá</h3>
      <div className='flex items-center justify-between border border-[#787878] rounded-[8px] py-1.5 px-2'>
        <Input 
          className='max-w-[130px] h-6 focus-visible:ring-0 border-none shadow-none p-0'
          placeholder='Tối thiểu'
          onChange={handleChangeMin}
          value={valueMin}
        />
        <p className='text-[#787878] underline text-sm font-semibold'>đ</p>
      </div>
      <div className='flex items-center justify-between border border-[#787878] rounded-[8px] py-1.5 px-2'>
        <Input 
          className='max-w-[130px] h-6  focus-visible:ring-0 border-none shadow-none p-0'
          placeholder='Tối đa'
          onChange={handleChangeMax}
          value={valueMax}
        />
        <p className='text-[#787878] underline text-sm font-semibold'>đ</p>
      </div>
      <Button
        className='h-9 bg-[#0072bc] hover:bg-[#005596]'
        onClick={() => onSubmit({valueMin, valueMax})}
        disabled={!valueMin && !valueMax ? true : false}
      >
        Áp dụng
      </Button>

      <RadioGroup className='space-y-2.5' value={valueRadio} onValueChange={handleRadio}>
        {DATA.map(item => {
          const radioLabel = getRadioLabel(item.label);
          return (
            <div className='flex items-center space-x-2' key={item.id}>
              <RadioGroupItem
                className={cn('hover:border-[#185abc] border-[#e5e7eb]', {
                  'border-[#185abc]': `${item.id}` === `${valueRadio}`
                })}
                value={`${item.id}`}
                id={`${item.id}`}  
              />
              <Label htmlFor={`${item.id}`}>{radioLabel}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  )
}