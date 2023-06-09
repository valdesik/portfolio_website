import React from 'react';
import {motion} from "framer-motion";
import {useIntl} from "react-intl";

const Skill = ({name, x, y}) => {

    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                            cursor-pointer absolute py-3 px-6 md:p-3 md:py-2 md:px-2
                            '
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            whileInView={{x: x, y: y}}
            transition={{duration: 1.5}}
        >
            <p className='md:text-xs'>{name}</p>
        </motion.div>
    )
}

const Skills = () => {
    const intl = useIntl();
    return (
        <>
            <h2 className='font-bold text-6xl mt-64 mb-32 w-full text-center lg:mt-16 lg:mb-8 lg:text-5xl'>{intl.formatMessage({id:"page.about.head.skills.title"})}</h2>
            <div
                className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight md:h-[50vh]'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                            cursor-pointer md:p-4
                            '
                    whileHover={{scale: 1.05}}
                >
                    WEB
                </motion.div>

                <Skill name="HTML" x="-25vw" y="7vw"/>
                <Skill name="CSS" x="-5vw" y="-12vw"/>
                <Skill name="Javascript" x="20vw" y="6vw"/>
                <Skill name="ReactJS" x="0vw" y="12vw"/>
                <Skill name="NextJS" x="-20vw" y="-15vw"/>
                <Skill name="PHP" x="15vw" y="-12vw"/>
                <Skill name="Laravel" x="32vw" y="-5vw"/>
                <Skill name="SQL" x="0vw" y="-21vw"/>
                <Skill name="API" x="-21vw" y="-5vw"/>
                <Skill name="Git and Github" x="-23vw" y="19vw"/>
                <Skill name="WordPress" x="0vw" y="24vw"/>
                <Skill name="Tailwind CSS" x="22vw" y="20vw"/>
            </div>
        </>
    );
};

export default Skills;