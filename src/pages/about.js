import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/images/profile/fox2.png"
import Image from "next/image";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {useIntl} from "react-intl";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 8000})
    const isInView = useInView(ref, {once: true});
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}

const About = () => {
    const intl = useIntl();
    return (
        <>
            <Head>
                <title>{"  Valdesik | " + intl.formatMessage({id:"page.about.head.title"})}
                  </title>
                <meta name="description" content="any description"/>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={intl.formatMessage({id:"page.about.head.mainText"})} className='mb-16'/>
                    <div className='grid w-full grid-cols-8 gap-16 lg:grid-cols-1'>
                        <div className='col-span-3 flex flex-col items-start justify-start lg:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>{intl.formatMessage({id:"page.about.head.titleText"})}</h2>
                            <p>
                                {intl.formatMessage({id:"page.about.head.description.part1"})}
                            </p>
                            <p>
                                {intl.formatMessage({id:"page.about.head.description.part2"})}
                            </p>
                            <p>
                                {intl.formatMessage({id:"page.about.head.description.part3"})}
                            </p>
                        </div>
                        <div
                            className='col-span-3 relative h-max rounded-2x1 border-2 border-solid border-dark bg-light lg:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[105%] h-[106%] rounded-[1rem] bg-dark'/>
                            <Image src={profilePic} alt="Valdesik" className='w-full h-auto rounded-2x1'
                                   priority
                                   sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
               33vw'
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between lg:order-3 lg:flex-row lg:w-full lg:pr-6 '>
                            <div className='flex flex-col items-end justify-center lg:items-center lg:flex-1 lg:mr-5'>
                                <span className='inline-block text-7xl  font-bold md:text-3xl lg:text-5xl'><AnimatedNumbers value={25}/>+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 lg:text-sm'> {intl.formatMessage({id:"page.about.head.goal.part1"})}</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center lg:items-center lg:flex-1 lg:mx-5'>
                                <span className='inline-block text-7xl font-bold md:text-3xl lg:text-5xl'><AnimatedNumbers value={20}/>+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 lg:text-sm'>{intl.formatMessage({id:"page.about.head.goal.part2"})}</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center lg:items-center lg:flex-1 lg:ml-5'>
                                <span className='inline-block text-7xl font-bold md:text-3xl lg:text-5xl'><AnimatedNumbers value={3}/>+</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 lg:text-sm '>{intl.formatMessage({id:"page.about.head.goal.part3"})}</h2>
                            </div>
                        </div>

                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>
            </main>

        </>
    );
};

export default About;