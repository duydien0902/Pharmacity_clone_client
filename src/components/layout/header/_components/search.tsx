'use client'

import React, { useRef, useState, useEffect } from 'react'

import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

import { Input } from '@/components/ui/search'

import { SearchSuggestion } from './search-suggestion';

export const Search = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  // const [prevSearch, setPrevSearch] = useState('')

  const [input, setInput] = useState('')
  const inputRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);

  // useEffect(() => {
  //   if(searchValue) {
  //     console.log(searchValue)
  //   }
  // }, [searchValue])

  const focusIcon = () => {
    setIsOpen(!isOpen)
   
    if(isOpen) {
      inputRef.current.focus()
    }
  }

  const handleChange = (e: any) => {
    const search = e.target.value;
    setInput(search);
    // Hủy bỏ timeout hiện tại trước khi thiết lập timeout mới
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Thiết lập một timeout mới để gọi lại handleSearchDebounced sau khi debounce
    timeoutRef.current = setTimeout(() => {
      setSearchValue(search)
    }, 1000);
  }

  return (
    <div className='relative'>
      <div className='flex gap-x-3 items-center rounded-[8px] px-3 py-[1px] bg-white text-black'>
          <CiSearch size={24} className='cursor-pointer hover:text-[#0072bc]' onClick={focusIcon} />
          <Input
              className='focus-visible:ring-0 border-none pr-3 pl-0'
              ref={inputRef} 
              placeholder='Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng'
              onFocus={() => setIsOpen(false)}
              onBlur={() => setIsOpen((prev) => !prev)}
              onChange={handleChange}
              value={input}
          />
          {input && <IoIosCloseCircle size={20} className='cursor-pointer' onClick={() => {setInput(''); setIsOpen(false)}} />}
      </div>
      {!isOpen &&
        <div className='absolute z-20 w-full top-[calc(100%+8px)] bg-white text-[#2b2b2b] shadow-lg rounded-[4px]'>
          <SearchSuggestion input={input} />
        </div> 
      }
    </div>
  )
}