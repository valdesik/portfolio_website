import React, {useEffect, useState} from 'react';
import styles from './ContactForm.module.css'
import {motion} from "framer-motion";
import Layout from "@/components/Layout";
import {useIntl} from "react-intl";
import {useRouter} from "next/router";


const ContactForm = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [typeMessenger, setTypeMessenger] = useState('telegram');
    const [messenger, setMessenger] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = new FormData();
        data.append('full_name', fullName);
        data.append('email', email);
        data.append('message', message);
        data.append('messenger_name', messenger);
        data.append('phone', phone);
        data.append('messenger_type', typeMessenger);

        let requestOption = {
            method:"POST",
            headers:{"Accept":'application/json'},
            body: data
        }
        try {
            console.log(requestOption.body)
          const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/user-contact/store`, requestOption)
              .then(response => response.json())
              .then(data => {
                  // Обработка ответа от сервера
                  console.log(data);
              })
              .catch(error => {
                  // Обработка ошибок
                  console.error('Ошибка:', error);
              });
        }
        catch (e){
            console.error(e)
        }

    }
    const handleInputChange = (e, set) => {
        set(e.target.value);
    };
    const {
        asPath,        // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
        pathname,   // the value: "/question/[slug]"
    } = useRouter();


    const intl = useIntl()
    return (
        <>

            <div
                className={`flex flex-col justify-center items-center bg-transparent  ${props.className}`}>
                <form className={`relative z-2 flex flex-col p-6 rounded-2xl backdrop-blur-lg shadow-2xl border border-solid border-dark bg-light`}>
                    { asPath !=='/contacts' && (
                     <motion.button
                        className="h-8 w-8 flex justify-center items-center rounded-full relative left-[90%] top-0"
                        whileHover={{rotate: 20}}
                        transition={{duration: 0.5}}
                        onClick={props.Click}
                    >
                        <span
                            onClick={props.Click}
                            className="transform rotate-45 absolute h-0.5 w-5 bg-dark top-3"></span>
                        <span
                            onClick={props.Click}
                            className="transform -rotate-45 absolute h-0.5 w-5 bg-dark top-3"></span>
                    </motion.button>) }

                    <h3 className='text-2xl font-bold my-5'> {intl.formatMessage({id: 'form.title'})}</h3>

                    <div className="relative mb-3" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block border-b-2 border-gray-500 border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="FullName"
                            style={{backgroundColor: "transparent"}}
                            name='FullName'
                            placeholder={intl.formatMessage({id: 'form.fullName'})}
                            onChange={(e) => {
                                handleInputChange(e, setFullName)
                            }}
                            value={fullName}
                        />

                        <label
                            htmlFor="FullName"
                            className={`${fullName.length !== 0 ? '-translate-y-[0.9rem] scale-[0.8]' : ''} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark`}
                        >{intl.formatMessage({id: 'form.fullName'})}
                        </label>
                    </div>
                    <div className="relative mb-3" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className={`peer block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="Email"
                            name='Email'
                            placeholder="Email"
                            style={{backgroundColor: "transparent"}}
                            value={email}
                            onChange={(e) => {
                                handleInputChange(e, setEmail)
                            }}
                        />


                        <label
                            htmlFor="Email"
                            className={`${email.length !== 0 ? '-translate-y-[0.9rem] scale-[0.8]' : ''} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark`}
                        >Email
                        </label>
                    </div>
                    <div className="relative mb-3" data-te-input-wrapper-init>
                        <input
                            type="tel"
                            className="peer block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="PhoneNumber"
                            name='PhoneNumber'
                            style={{backgroundColor: "transparent"}}
                            placeholder={intl.formatMessage({id: 'form.phone'})}
                            value={phone}
                            onChange={(e) => {
                                handleInputChange(e, setPhone)
                            }}
                        />


                        <label
                            htmlFor="PhoneNumber"
                            className={`${phone.length !== 0 ? '-translate-y-[0.9rem] scale-[0.8]' : ''} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark`}
                        >{intl.formatMessage({id: 'form.phone'})}
                        </label>
                    </div>

                    <label>{intl.formatMessage({id: 'form.question'})}</label>
                    <div className='my-2 flex w-full'>
                        <select className='mb-3 mr-3 rounded border-0 bg-transparent outline-none'
                                style={{backgroundColor: "transparent"}}
                                value={typeMessenger}
                                onChange={(e) => {
                                    handleInputChange(e, setTypeMessenger)
                                }}
                        >
                            <option value="telegram">Telegram</option>
                            <option value="whatsup">Whats&#39;up</option>
                            <option value="instagram">Email</option>
                        </select>
                        <div className="relative mb-3" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-transparent"
                                id="Messenger"
                                name='Messenger'
                                placeholder={intl.formatMessage({id: 'form.messenger'})}
                                style={{backgroundColor: "transparent"}}
                                value={messenger}
                                onChange={(e) => {
                                    handleInputChange(e, setMessenger)
                                }}
                            />


                            <label
                                htmlFor="Messenger"
                                className={`${messenger.length !== 0 ? '-translate-y-[0.9rem] scale-[0.8]' : ''} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark peer-focus:bg-light`}
                            >{intl.formatMessage({id: 'form.messenger'})}
                            </label>
                        </div>
                    </div>

                    <div className="relative mb-3" data-te-input-wrapper-init>
  <textarea
      style={{backgroundColor: "transparent"}}
      className="peer resize-none block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="Message"
      rows="1"
      placeholder="Your message"
      value={message}
      onChange={(e) => {
          handleInputChange(e, setMessage)
      }}
  >


  </textarea>
                        <label
                            htmlFor="Message"
                            className={`${message.length !== 0 ? '-translate-y-[0.9rem] scale-[0.8]' : ''} pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                        >{intl.formatMessage({id: 'form.message'})}</label
                        >
                    </div>

                    <div className='my-4'>

                        <button
                            className='w-full bg-[#3b71ca] text-light border-l border-r rounded-tl-lg rounded-br-lg border-gray-400 px-4 py-2'
                            type='submit'
                            onClick={handleSubmit}
                        >{intl.formatMessage({id: 'form.submit'})}

                        </button>
                    </div>
                </form>

            </div>

        </>
    );
};

export default ContactForm;

