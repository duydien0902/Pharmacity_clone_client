import React from 'react'

import { Settings } from 'react-slick'

import { ProductCardProps } from '@/types/product-card';
import { SlickSlider } from '@/components/ui/slick-slider';

import { ProductCard } from '../product/product-card';
import styles from './ProductSlider.module.css'

interface ProductsSliderProps {
  data: ProductCardProps[]
}

export const ProductsSlider = ({ data }: ProductsSliderProps) => {

  const settings: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    className: styles.slider,
  }

  return (
    <div>
      <SlickSlider settings={settings}>
        {data?.map(item => (
          <ProductCard item={item} key={item.id} />
        ))}
      </SlickSlider>
    </div>
  )
}