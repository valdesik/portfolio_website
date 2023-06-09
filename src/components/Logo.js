import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";

const MotionLink = motion(Link)
const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/'
                        className=' flex items-center justify-center'
                        whileHover={{
                            scale: 2,
                            transition: {duration: 1},
                        }}

            >
                <img src='/images/profile/logo.png' className='w-32'/>
            </MotionLink>
        </div>
    );
};

export default Logo;