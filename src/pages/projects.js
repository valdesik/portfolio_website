import React, {useEffect, useState} from 'react';
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import project2 from "../../public/images/projects/bot.jpeg"
import project3 from "../../public/images/projects/puppet2.jpeg"
import project4 from "../../public/images/projects/threejs.png"
import {motion} from "framer-motion";
import {useIntl} from "react-intl";







const  Project = ({title, type, summary, img, link,github}) => {


    return(

    <article
        className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-4 relative animate__animated animate__fadeInUp'>
        <div
            className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <motion.div
                whileHover={{scale: 1.35}}
            >
                <Image src={img} alt={title} className='w-full h-[180px]'

                />
            </motion.div>
        </div>
        <div className='w-full flex flex-col items-start justify-between pl-2'>
            <div className={`hover:underline underline-offset-2`}>
                <h5 className='my-1 w-full text-left text-xl font-bold'>{title}</h5>
            </div>
            <p className='my-1 font-normal text-xs text-dark'>{summary}</p>
        </div>
    </article>
)
}
const Projects = () => {
    const intl = useIntl()
    const [completed, SetCompleted]=useState(false);

    useEffect(()=> {
        SetCompleted(false);
    },[completed, SetCompleted])

    let arr = [];
    for(let i=1;i<=3; i++ ){
        arr.push([intl.formatMessage({id:`page.projects.title.${i}`}),intl.formatMessage({id:`page.projects.img.${i}`}),intl.formatMessage({id:`page.projects.summary.${i}`}) ])
    }
    return (

        <>
            <Head>
                <title>{ "Valdesik | " + intl.formatMessage({id:'page.projects.title'}) }</title>
                <meta name="description" content="any description"/>
            </Head>
            <main className='w-full mb-16 flex flex-col'>
            <Layout className='pt-16'>
                <AnimatedText text={ intl.formatMessage({id:'page.projects.mainText'})}
                className='mb-16'/>
                {completed === true &&
                <div className='grid grid-cols-3 gap-3 lg:grid-cols-2'>



                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project2}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project3}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project4}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    <div className='col-span-1'>
                        <Project
                            title="Crypto Screener Application"
                            img={project1}
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                    </div>
                    {arr.map((item, index) => (
                    <div className='col-span-1' key={index}>
                        <Project
                            title={intl.formatMessage({ id: `page.projects.title.${index + 1}` })}
                            // img={intl.formatMessage({ id: `page.projects.img.${index + 1}` })}
                            img={project1}
                            summary={intl.formatMessage({ id: `page.projects.summary.${index + 1}` })}
                        />
                    </div>
                    ))}
                </div>
                }
                {completed===false &&
                <div className='w-full h-[200px] flex justify-center items-center'><h2 className='text-5xl animate-[5s_linear_1s_infinite_alternate_slidein]'>Page in work</h2></div>
                }
            </Layout>
                </main>
        </>
    );
};

export default Projects;