import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {UA, PL, UK} from '@/components/Icons'

const LanguageSwitcher = () => {

    const router = useRouter();
    let {locale, locales, pathname, query} = router;
    let languageFlag;
    switch (locale) {
        case 'en':
            languageFlag = <UK /> ;
            break;
        case 'ua':
            languageFlag = <UA /> ;
            break;
        case 'pl':
            languageFlag = <PL /> ;
            break;
        default:
            languageFlag = <UK />
    }



    return (
        <>
            <div className="group inline-block mx-5">
                <button
                    className="outline-none focus:outline-none px-1 py-1 bg-white rounded-sm flex items-center min-w-12">
                    <span className="pr-1 font-semibold flex-1 uppercase">{languageFlag}</span>
                    <span>
                    <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </span>
                </button>
                <ul className="border rounded-sm transform scale-0 group-hover:scale-100 absolute
  transition duration-150 ease-in-out origin-top min-w-12">
                    <li className="rounded-sm px-1 py-2"><Link href='' locale='en'><UK /></Link></li>
                    {/*<li className="rounded-sm px-3 py-2"><Link href='' locale='pl'><PL /></Link></li>*/}
                    <li className="rounded-sm px-1 py-2"><Link href='' locale='ua'><UA /></Link></li>
                </ul>
            </div>
        </>
    );
};

export default LanguageSwitcher;