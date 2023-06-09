import React from 'react';
import {motion} from "framer-motion";
import {FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TelegramIcon} from "@/components/Icons";

const SocialIcons = () => {
    return (
        <>
            <motion.a href='twitter.com' className='w-6 mr-3' target={'_blank'} whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}><TelegramIcon/></motion.a>
            <motion.a href='twitter.com' className='w-6 mx-3' target={'_blank'} whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}><LinkedInIcon/></motion.a>
            <motion.a href='twitter.com' className='w-6 mx-3' target={'_blank'} whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}><GithubIcon/></motion.a>
            <motion.a href='twitter.com' className='w-6 mx-3' target={'_blank'} whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}><InstagramIcon/></motion.a>
            <motion.a href='twitter.com' className='w-6 ml-3' target={'_blank'} whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}><FacebookIcon/></motion.a>

        </>
    );
};

export default SocialIcons;