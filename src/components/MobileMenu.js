import React, {useEffect, useRef, useState} from 'react';
import Logo from "@/components/Logo";
import {useRouter} from "next/router";
import Link from "next/link";
import {motion} from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import {useIntl} from "react-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";


const MobileMenu = ({className, ...props}) => {
    const intl = useIntl();
    const mobileMenuRef = useRef(null);
    const [isMobileMenu, setIsMobileMenu] = useState(props.mobileMenu)
    const [firstOpen, isFirstOpen] = useState(false)

    useEffect(() => {
        setIsMobileMenu(props.mobileMenu);
        if (props.mobileMenu === true) {
            isFirstOpen(true)
        }
    }, [props.mobileMenu])

    let handleClick = (e) => {
        // e.preventDefault()
        setIsMobileMenu(!props.mobileMenu);
        props.mobileMenuClick();
    }


    const CustomLink = ({href, title, className = ""}) => {
        const router = useRouter();
        return (
            <Link href={href} className={`${className}  relative group text-light text-4xl overflow-hidden`}
                  onClick={handleClick}
            >
                {title}
                <span className={`h-[1px] inline-block bg-light absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
            </Link>
        )
    }

    return (
        <>

            <div ref={mobileMenuRef}
                 className={`w-full h-full bg-dark bg-opacity-80 transition-all duration-700 ease-in-out backdrop-blur-lg fixed z-[1053] ${firstOpen ? '' : 'invisible'} ${isMobileMenu ? 'animate__animated animate__backInRight' : 'animate__animated animate__backOutRight'}`}>
                <motion.button

                    onClick={handleClick}
                    className="h-8 w-8 flex justify-center items-center rounded-full relative left-[90%] top-0 "
                >
                        <span
                            onClick={handleClick}
                            className="transform rotate-45 absolute h-1.5 w-10 bg-light top-10 right-5"></span>
                    <span
                        onClick={handleClick}
                        className="transform -rotate-45 absolute h-1.5 w-10 bg-light top-10 right-5"></span>
                </motion.button>
                <LanguageSwitcher />
                <div className='h-full w-full flex justify-center items-center flex-col'>
                    <Logo/>

                    <nav className='flex flex-col justify-center items-center'>
                        <CustomLink href='/' title={intl.formatMessage({id: "nav.home"})} className='my-4'

                        />
                        <CustomLink href='/about' title={intl.formatMessage({id: "nav.about"})} className='my-4'

                        />
                        <CustomLink href='/projects' title={intl.formatMessage({id: "nav.projects"})} className='my-4'

                        />
                        <CustomLink href='/contacts' title={intl.formatMessage({id: "nav.contacts"})} className='my-4'
                        />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-16'>
                        <SocialIcons/>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;