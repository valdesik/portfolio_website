import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/fox2.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import PopUpForm from "@/components/popUpForm";
import {useState} from "react";
import {useLottie} from "lottie-react";
import contactImage from "../../public/lottie/91451-developer-blue";
import {FormattedMessage, useIntl} from "react-intl";
import {useRouter} from "next/router";


const inter = Inter({subsets: ['latin']})


export default function Home() {
    const [isHidden, setIsHidden] = useState(true);
    let handleClick = (e) => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            setIsHidden(!isHidden)
        }
    }
    const options = {
        animationData: JSON.parse(JSON.stringify(contactImage)),
    };
    const {View} = useLottie(options);

    const intl = useIntl();
    const title = intl.formatMessage({id: "page.home.head.title"})
    const MainText = intl.formatMessage({id: 'page.home.head.mainText'})

    return (
        <>
            <Head>
                <title>{'Valdesik | ' + title}</title>

            </Head>

            <PopUpForm
                className={isHidden ? 'opacity-0 scale-95 pointer-events-none transition duration-3000 ease-in-out' : ''}
                formClassName={isHidden ? 'animate__animated animate__fadeOutUpBig' : 'animate__animated animate__fadeInDownBig'}
                Click={handleClick}

            />

            <main className='flex items-center lg:items-start text-dark w-full min-h-screen'>
                <Layout className='pt-0'>
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className='w-1/2 lg:w-full lg:order-2'>
                            {/*<Image src={profilePic} alt="Vladyslav" className='w-full h-auto'*/}
                            {/*priority*/}
                            {/*       sizes='(max-width:768px) 100vw,*/}
                            {/*      (max-width:1200px) 50vw,*/}
                            {/*       33vw'*/}
                            {/*/>*/}
                            {View}
                            {/*<Scene className='w-full h-screen' />*/}
                        </div>
                        <div className='w-1/2 lg:w-full flex flex-col items-center lg:order-1'>
                            <AnimatedText text={MainText}
                                          className=' !text-left lg:text-3xl lg:!text-center text-5xl'></AnimatedText>
                            <p className='my-4 text-base font-medium lg:text-center lg:my-2'>{intl.formatMessage({id: "page.home.head.description"})}
                            </p>
                            <div className='flex items-center w-full self-start mt-4 lg:justify-center xl:mt-2'>
                                <a className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
            border border-solid border-transparent hover:border-dark xl:p-2" href="/dummy.pdf"
                                      target={"_blank"}>{intl.formatMessage({id: "page.home.head.resume"})}
                                    <LinkArrow className={"w-6 ml-1 xl:h-6 xl:w-4"}></LinkArrow>
                                </a>
                                <button
                                    className="ml-4 text-lg font-medium capitalize text-dark underline"
                                    onClick={handleClick}
                                >{intl.formatMessage({id: "page.home.head.btn"})}
                                </button>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe
                    onClick={handleClick}
                />
                <div className='absolute right-8 bottom-8 inline-block w-24'>
                    <Image src={lightBulb} alt="Valdesik" className='w-full h-auto lg:hidden'/>
                </div>
            </main>

        </>
    )
}
