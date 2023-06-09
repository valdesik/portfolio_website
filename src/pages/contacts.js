import React from 'react';
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import SocialIcons from "@/components/SocialIcons";
import {useLottie} from "lottie-react";
import contactImage from "../../public/lottie/97634-code.json";
import Link from "next/link";
import {useIntl} from "react-intl";


const Contacts = () => {
    const options = {
        animationData: JSON.parse(JSON.stringify(contactImage)),
    };
    const { View } = useLottie(options);
    const intl = useIntl();
    return (
        <>
            <Head>
                <title>{"Valdesik | "+ intl.formatMessage({id:'page.about.contacts.title'})}</title>
                <meta name="description" content="any description"/>
            </Head>
            <main className=' w-full flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={intl.formatMessage({id:'page.about.contacts.mainText'})} className='mb-16 md:mb-2'/>
                    <div className='grid grid-cols-2 sm:grid-cols-1 justify-center items-center'>
                            <div className='mr-4 w-[75%] lg:w-[100%]'><ContactForm /></div>
                            <div className='ml-4 md:mt-4'>{View}</div>
                    </div>

                    <nav className='flex items-center justify-center flex-wrap mt-20'>
                        <SocialIcons />
                    </nav>

                </Layout>
            </main>
        </>
    );
};

export default Contacts;