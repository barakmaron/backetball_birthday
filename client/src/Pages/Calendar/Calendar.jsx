import styles from '../styles/calendar.module.css';
import React from 'react';
import DaysHeader from '../components/Calendar/DaysHeader';
import { FcRotateToPortrait } from 'react-icons/fc';
import CalendarActionsConnector from '../components/Calendar/CalendarActions/CalendarActionsConnector';
import DaysInCalendarConnector from '../components/Calendar/DaysInCalendar/DaysInCalendarConnector';

const CalendarPage = () => {
  return (<>
    <div className='container mx-auto mt-10'>
        <div className="wrapper bg-white rounded shadow w-full  portrait:hidden relative">
            <div className="header flex justify-between border-b p-2">                
                <CalendarActionsConnector />
            </div>
            <table className="w-full">
                <thead>
                    <DaysHeader></DaysHeader>
                </thead>
                <tbody >
                    <DaysInCalendarConnector />
                </tbody>
            </table>
            <div className={styles.court_image}></div>           
        </div>
         <div className='hidden portrait:flex flex-col gap-4 text-center text-2xl items-center'>
            <FcRotateToPortrait className='text-6xl'></FcRotateToPortrait>
            סובב מכשיר בכדי לראות את הלוז
        </div>
    </div>
    </>)
};

export default CalendarPage;
