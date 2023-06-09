import React from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";
import {useIntl} from "react-intl";

const Footer = () => {
    const intl = useIntl();
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className={'py-8 flex items-center justify-between lg:py-2 lg:flex-col'}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>Build With<span className='text-primary text-2xl px-1'> &hearts; </span><Link href="/">by <span
                    className='underline'>Valdesik</span></Link></div>
                <Link href="/" target='_blank'>{intl.formatMessage({id: 'page.home.footer.sayHello'})}</Link>
            </Layout>
        </footer>
    );
};

export default Footer;