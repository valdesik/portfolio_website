import React, {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import LiIcon from "@/components/liIcon";
import {useIntl} from "react-intl";


const Details = ({position, company, timeFrom, timeTo, work, address}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
            <LiIcon reference={ref}/>
            <div
                initial={{y: 50}}
                whileinview={{y: 0}} I
                transition={{duration: 0.5, type: "spring"}}
            ><h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<span
                className='normal-case font-medium'>in</span>
                <span className='text-primary capitalize'> {company}</span></h3>
                <span className='capitalize font-medium text-dark/75'>[ {timeFrom}-{timeTo} ] | {address}</span>
                <p className='font-medium w-full'> {work}</p>
            </div>
        </li>
    )
}
const Experience = () => {
    const intl = useIntl()
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64 lg:my-8 md:my-4'>
            <h2 className='font-bold text-4xl mb-32 w-full text-center lg:text-5xl lg:mb-16 '>
                {intl.formatMessage({id:"page.about.head.experience.title"})}
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative md:w-[100%]'>

                <motion.div style={{scaleY: scrollYProgress}}
                            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top '

                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">

                    <Details
                        position={intl.formatMessage({id:"page.about.experience.position.position.1"})}
                        company={intl.formatMessage({id:"page.about.experience.position.company.1"})}
                        timeFrom={intl.formatMessage({id:"page.about.experience.position.timeFrom.1"})}
                        timeTo={intl.formatMessage({id:"page.about.experience.position.timeTo.1"})}
                        address={intl.formatMessage({id:"page.about.experience.position.address.1"})}
                        work={intl.formatMessage({id:"page.about.experience.position.workDescription.1"})}
                    />
                    <Details
                        position={intl.formatMessage({id:"page.about.experience.position.position.2"})}
                        company={intl.formatMessage({id:"page.about.experience.position.company.2"})}
                        timeFrom={intl.formatMessage({id:"page.about.experience.position.timeFrom.2"})}
                        timeTo={intl.formatMessage({id:"page.about.experience.position.timeTo.2"})}
                        address={intl.formatMessage({id:"page.about.experience.position.address.2"})}
                        work={intl.formatMessage({id:"page.about.experience.position.workDescription.2"})}
                    />
                    <Details
                        position={intl.formatMessage({id:"page.about.experience.position.position.3"})}
                        company={intl.formatMessage({id:"page.about.experience.position.company.3"})}
                        timeFrom={intl.formatMessage({id:"page.about.experience.position.timeFrom.3"})}
                        timeTo={intl.formatMessage({id:"page.about.experience.position.timeTo.3"})}
                        address={intl.formatMessage({id:"page.about.experience.position.address.3"})}
                        work={intl.formatMessage({id:"page.about.experience.position.workDescription.3"})}
                    />


                </ul>
            </div>
        </div>
    );
};

export default Experience;