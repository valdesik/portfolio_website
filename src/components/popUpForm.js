import React from 'react';

import {useIntl} from "react-intl";
import ContactForm from "@/components/ContactForm";


const PopUpForm = ({className = '', formClassName = '', ...props}) => {
    const intl = useIntl()
    return (
        <>
            <div
                onClick={props.Click}
                className={` h-screen w-full overflow-hidden bg-dark bg-opacity-70 backdrop-blur-lg transition-opacity duration-700 ease-in-out w-full fixed top-0 left-0 flex items-center justify-center z-10 ${className}`}
            >
                <div
                    className={`flex flex-col justify-center items-center fixed top-[15%] z-20 `}>

                    <ContactForm Click={props.Click} className={`${formClassName}`}/>


  {/*                  <form className={`relative z-2 flex flex-col `} method={'Post'}>*/}



  {/*                      <h3 className='text-2xl font-bold my-5'> {intl.formatMessage({id:'form.title'})}</h3>*/}

  {/*                      <div className="relative mb-3" data-te-input-wrapper-init>*/}
  {/*                          <input*/}
  {/*                              type="text"*/}
  {/*                              className="peer block border-b-2 border-gray-500 border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"*/}
  {/*                              id="FullName"*/}
  {/*                              style={{backgroundColor: "transparent"}}*/}
  {/*                              name={intl.formatMessage({id:'form.fullName'})}*/}
  {/*                              placeholder={intl.formatMessage({id:'form.fullName'})}/>*/}

  {/*                          <label*/}
  {/*                              htmlFor="FullName"*/}
  {/*                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark"*/}
  {/*                          >{intl.formatMessage({id:'form.fullName'})}*/}
  {/*                          </label>*/}
  {/*                      </div>*/}
  {/*                      <div className="relative mb-3" data-te-input-wrapper-init>*/}
  {/*                          <input*/}
  {/*                              type="email"*/}
  {/*                              className="peer block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"*/}
  {/*                              id="Email"*/}
  {/*                              name='Email'*/}
  {/*                              placeholder="Email"*/}
  {/*                              style={{backgroundColor: "transparent"}}*/}
  {/*                          />*/}


  {/*                          <label*/}
  {/*                              htmlFor="Email"*/}
  {/*                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark"*/}
  {/*                          >Email*/}
  {/*                          </label>*/}
  {/*                      </div>*/}
  {/*                      <div className="relative mb-3" data-te-input-wrapper-init>*/}
  {/*                          <input*/}
  {/*                              type="phone"*/}
  {/*                              className="peer block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"*/}
  {/*                              id="PhoneNumber"*/}
  {/*                              name='PhoneNumber'*/}
  {/*                              style={{backgroundColor: "transparent"}}*/}
  {/*                              placeholder={intl.formatMessage({id:'form.phone'})}*/}
  {/*                          />*/}


  {/*                          <label*/}
  {/*                              htmlFor="PhoneNumber"*/}
  {/*                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark"*/}
  {/*                          >{intl.formatMessage({id:'form.phone'})}*/}
  {/*                          </label>*/}
  {/*                      </div>*/}

  {/*                      <label>{intl.formatMessage({id:'form.question'})}</label>*/}
  {/*                      <div className='my-2 flex w-full'>*/}
  {/*                          <select className='mb-3 mr-3 rounded border-0 bg-transparent outline-none'*/}
  {/*                                  style={{backgroundColor: "transparent"}}*/}
  {/*                          >*/}
  {/*                              <option value="telegram">Telegram</option>*/}
  {/*                              <option value="whatsup">Whats'up</option>*/}
  {/*                              <option value="instagram">Email</option>*/}
  {/*                          </select>*/}
  {/*                          <div className="relative mb-3" data-te-input-wrapper-init>*/}
  {/*                              <input*/}
  {/*                                  type="text"*/}
  {/*                                  className="peer block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-transparent"*/}
  {/*                                  id="Messenger"*/}
  {/*                                  name='Messenger'*/}
  {/*                                  placeholder={intl.formatMessage({id:'form.messenger'})}*/}
  {/*                                  style={{backgroundColor: "transparent"}}*/}
  {/*                              />*/}


  {/*                              <label*/}
  {/*                                  htmlFor="Messenger"*/}
  {/*                                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-dark peer-focus:bg-light "*/}
  {/*                              >{intl.formatMessage({id:'form.messenger'})}*/}
  {/*                              </label>*/}
  {/*                          </div>*/}
  {/*                      </div>*/}

  {/*                      <div className="relative mb-3" data-te-input-wrapper-init>*/}
  {/*<textarea*/}
  {/*    style={{backgroundColor: "transparent"}}*/}
  {/*    className="peer resize-none block border-b-2 border-gray-500 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"*/}
  {/*    id="Message"*/}
  {/*    rows="1"*/}
  {/*    placeholder={intl.formatMessage({id:'form.message'})}></textarea>*/}
  {/*                          <label*/}
  {/*                              htmlFor="Message"*/}
  {/*                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"*/}
  {/*                          >{intl.formatMessage({id:'form.message'})}</label*/}
  {/*                          >*/}
  {/*                      </div>*/}

  {/*                      <div className='my-4'>*/}

  {/*                          <button*/}
  {/*                              className='w-full bg-[#3b71ca] text-light border-l border-r rounded-tl-lg rounded-br-lg border-gray-400 px-4 py-2'*/}
  {/*                              type='submit'>{intl.formatMessage({id:'form.submit'})}*/}
  {/*                          </button>*/}
  {/*                      </div>*/}
  {/*                  </form>*/}
                </div>
            </div>
        </>
    );
};

export default PopUpForm;