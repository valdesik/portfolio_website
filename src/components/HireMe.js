import React from 'react';
import {CircularText} from "@/components/Icons";
import Link from "next/link";


const HireMe = (props) => {
    return (
        <div className='fixed left-4 bottom-4 lg:align-baseline
        flex items-center justify-center overflow-hidden lg:right-8 sm:right-0  overflow-hidden lg:bottom-auto lg:left-auto lg:top-0 lg:absolute lg:z-10'>
            <div className='w-28 h-auto flex items-center justify-center relative lg:w-18 '>
                <CircularText className={'fill-dark circle lg:w-[80%]'}/>
                <Link href="#" onClick={props.onClick} className='flex items-center justify-center
absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
font-semibold hover:bg-light hover:text-dark transition-all duration-700 lg:w-16 lg:h-16 lg:text-sm'>
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;