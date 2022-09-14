import styles from './Calendar.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import DaysHeader from '../../Components/Calendar/DaysHeader';
import { FcRotateToPortrait } from 'react-icons/fc';
import CalendarActionsConnector from '../../Components/Calendar/CalendarActions/CalendarActionsConnector';
import DaysInCalendarConnector from '../../Components/Calendar/DaysInCalendar/DaysInCalendarConnector';
import Modal from '../../Components/Modal/Modal';
import Form from '../../Components/Form/Form';
import Constants from '../../Constants';

const CalendarPage = ({ 
    GetEventsAction,
    AddEventAction,
    month
}) => {
    const [add_event_modal, setShowAddEventModal] = useState(false);
    const [date_clicked, setDateClick] = useState(null);

    const BlockClick = useCallback((date) => {
        setDateClick(date);
        setShowAddEventModal(true);
    }, [setDateClick, setShowAddEventModal]);

    useEffect(() => {
        GetEventsAction();
    }, [GetEventsAction, month]);

    const SubmitNewEvent = useCallback((event, form) => {
        event.preventDefault();
        AddEventAction(form, date_clicked);
    }, [AddEventAction, date_clicked]);
    
  return (<div className=' overflow-x-clip'>
    <div className='container mx-auto mt-10 mb-28'>
        <div className="wrapper bg-white rounded shadow w-full portrait:hidden relative">
            <div className="header flex justify-between border-b p-2">                
                <CalendarActionsConnector />
            </div>
            <table className="w-full">
                <thead>
                    <DaysHeader></DaysHeader>
                </thead>
                <tbody >
                    <DaysInCalendarConnector 
                    blockOnClick={BlockClick}/>
                </tbody>
            </table>
            <div className={styles.court_image}></div>           
        </div>
         <div className='hidden portrait:flex flex-col gap-4 text-center text-2xl items-center'>
            <FcRotateToPortrait className='text-6xl'></FcRotateToPortrait>
            סובב מכשיר בכדי לראות את הלוז
        </div>
    </div>
    { add_event_modal && 
        <Modal
        setClose={() => setShowAddEventModal(false)}>
            <Form 
            action={SubmitNewEvent}
            inputs={Constants.add_event_form_inputs}></Form>
        </Modal>}
    </div>)
};

export default CalendarPage;
