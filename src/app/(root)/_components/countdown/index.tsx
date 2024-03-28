'use client'

import React, { useState, useEffect } from 'react'

import { formatNum } from '@/utils/formatUtils'

interface CountdownProps {
    targetDate: string
}

const calculateTimeLeft = (targetDate: string) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
};

export const Countdown = ({ targetDate }: CountdownProps) => {

    const [timeLeft, setTimeLeft] = useState<any>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
        <div className='flex gap-x-2 items-center text-[#f22222] text-xl font-bold'>
            {timeLeft &&
                <>
                    <div className='h-10 w-10 flex items-center justify-center rounded-[8px] mr-3 bg-white'><span>{formatNum(timeLeft.days)}</span></div>
                    <div className='h-10 w-10 flex items-center justify-center rounded-[8px] bg-white'><span>{formatNum(timeLeft.hours)}</span></div>
                    <div className='text-white'>:</div>
                    <div className='h-10 w-10 flex items-center justify-center rounded-[8px] bg-white'><span>{formatNum(timeLeft.minutes)}</span></div>
                    <div className='text-white'>:</div>
                    <div className='h-10 w-10 flex items-center justify-center rounded-[8px] bg-white'><span>{formatNum(timeLeft.seconds)}</span></div>
                </>
            }
        </div>
    );
}