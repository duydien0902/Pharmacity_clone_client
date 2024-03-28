'use client';

import Slider, { Settings, CustomArrowProps } from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import styles from './styles.module.css';

interface SlickSliderProps {
  settings?: Settings;
  children: React.ReactNode;
  variant?: 'default' | 'inline';
}

interface ArrowProps extends CustomArrowProps {
  type: 'prev' | 'next';
}

const Arrow = (props: ArrowProps) => {
  const { onClick, type } = props;

  const Icon = type === 'prev' ? ChevronLeft : ChevronRight;

  return (
    <button
      type='button'
      className={cn(
        'w-10 h-10 inline-flex items-center justify-center bg-white shadow-xl border border-gray-200 rounded-full text-white absolute z-10 top-1/2 -translate-y-1/2',
        {
          'left-0 -translate-x-1/2': type === 'prev',
          'right-0 translate-x-1/2': type === 'next',
        }
      )}
      onClick={onClick}
    >
      <Icon className='text-black w-6 h-6' />
    </button>
  );
};

export const SlickSlider = ({ children, settings = {} }: SlickSliderProps) => {
  let defaultSettings: Settings = {
    infinite: true,
    dots: false,
    arrows: false,
    nextArrow: <Arrow type='next' />,
    prevArrow: <Arrow type='prev' />,
    dotsClass: styles.dots,
    customPaging: () => <div className={styles.dot} />,
    ...settings,
  };

  return <Slider {...defaultSettings}>{children}</Slider>;
};
