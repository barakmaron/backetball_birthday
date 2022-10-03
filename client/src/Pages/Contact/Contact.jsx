import React, { useCallback, useEffect, useState } from 'react'
import Form from '../../Components/Form/Form';
import Constants from '../../Constants';

const Contact = ({
    SubmitContactFormAction,
    successful,
    failed,
    message
}) => {

    const [reset_form, setRestForm] = useState(false);

    const submit_contact_form = useCallback((event, form) => {
        event.preventDefault();
        SubmitContactFormAction(form);
    }, [SubmitContactFormAction]);

    useEffect(() => {
        if(successful)
            setRestForm(true);
    }, [successful]);

  return (<div dir='rtl' className='flex w-fit sm:flex-row flex-col mx-auto my-4'>
    <div>
        <Form 
        inputs={Constants.contact_form} 
        action={submit_contact_form}
        reset={reset_form}
        failed={failed}
        message={message}/>
    </div> 
    <div className='flex justify-center items-center'>
        <ul className='w-fit flex flex-col gap-3 py-2 text-center'>
            {Object.entries(Constants.contact_info).map(([name ,data]) => {
                return <li
                className='text-orange-500 text-xl'
                key={name}>
                    {data}
                </li>
            })}
        </ul>
    </div>
  </div>
  )
}

export default Contact;
