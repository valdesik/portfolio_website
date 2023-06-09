import React, {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import LiIcon from "@/components/liIcon";
import styles from './Education.module.css'
import {useIntl} from "react-intl";


const Details = ({type, timeFrom, timeTo, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
            <LiIcon reference={ref}/>
            <div
                initial={{y: 50}}
                whileinview={{y: 0}} I
                transition={{duration: 0.5, type: "spring"}}
            ><h3 className='capitalize font-bold text-2xl'>{type}&nbsp;
            </h3>
                <span className='capitalize font-medium text-dark/75'>[ {timeFrom}-{timeTo} ] | {place}</span>
                <p className='font-medium w-full'> {info}</p>
            </div>
        </li>
    )
}
const Education = () => {
    const intl = useIntl();
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64 lg:my-32 md:md-16'>
            <h2 className={`font-bold text-4xl mb-32 w-full text-center lg:mb-16 lg:text-5xl ${styles.timeTo}`}>
                {intl.formatMessage({id:"page.about.head.education.title"})}
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative md:w-[100%]'>

                <motion.div style={{scaleY: scrollYProgress}}
                            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'

                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        type={intl.formatMessage({id:"page.about.experience.education.type.1"})}
                        timeFrom={intl.formatMessage({id:"page.about.experience.education.timeFrom.1"})}
                        timeTo={intl.formatMessage({id:"page.about.experience.education.timeTo.1"})}
                        place={intl.formatMessage({id:"page.about.experience.education.place.1"})}
                        info={intl.formatMessage({id:"page.about.experience.education.info.1"})}
                    />
                    <Details
                        type={intl.formatMessage({id:"page.about.experience.education.type.2"})}
                        timeFrom={intl.formatMessage({id:"page.about.experience.education.timeFrom.2"})}
                        timeTo={intl.formatMessage({id:"page.about.experience.education.timeTo.2"})}
                        place={intl.formatMessage({id:"page.about.experience.education.place.2"})}
                        info={intl.formatMessage({id:"page.about.experience.education.info.2"})}
                    />


                </ul>
            </div>
        </div>
    );
};

export default Education;