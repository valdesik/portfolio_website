import Link from "next/link";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";
import {GithubIcon, LinkedInIcon, TelegramIcon, FacebookIcon, InstagramIcon} from "@/components/Icons";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import SocialIcons from "@/components/SocialIcons";
import MobileMenu from "@/components/MobileMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {useIntl} from "react-intl";


const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
        </Link>
    )
}
const NavBar = () => {
    const intl = useIntl();

    const [isOpen, SetIsOpen] = useState(false);

    const handleClick = (e) => {
        SetIsOpen(!isOpen)
    }

    return (
        <>
            <MobileMenu
                mobileMenu={isOpen}
                mobileMenuClick={handleClick}
            />

            <header
                className='w-full flex items-center justify-between px-32 py-8 font-medium z-10 lg:px-16 relative z-1 md:px-12 sm:px-8 fixed'
            >
                <button onClick={handleClick} className='hidden lg:block ml-4'>
                    <span
                        className={`bg-dark block h-0.5 w-7 transition-all duration-300 rounded-sm  ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'}`}></span>
                    <span
                        className={`bg-dark block h-0.5 w-7 transition-all duration-300 rounded-sm my-1.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span
                        className={`bg-dark block h-0.5 w-7 transition-all duration-300 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'}`}></span>
                </button>
                <nav className='lg:hidden'>
                    <CustomLink href='/' title={intl.formatMessage({id: "nav.home"})} className='mr-4'/>
                    <CustomLink href='/about' title={intl.formatMessage({id: "nav.about"})} className='mx-4'/>
                    <CustomLink href='/projects' title={intl.formatMessage({id: "nav.projects"})} className='mx-4'/>
                    <CustomLink href='/contacts' title={intl.formatMessage({id: "nav.contacts"})} className='ml-4'/>

                </nav>

                <nav className='flex items-center justify-center flex-wrap lg:hidden'>
                    <SocialIcons/>
                    <LanguageSwitcher/>
                </nav>
                <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                    <Logo/>
                </div>
            </header>
        </>
    );
};

export default NavBar;