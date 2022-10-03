import _ from 'lodash';
import moment from 'moment';
import React, { useCallback } from 'react';
import EventConnector from '../Event/EventConnector';

const DaysInCalendar = ({
    month,
    year,
    events,
    blockOnClick
}) => {

    const base_time = moment().year(year).month(month);
    const start_week = base_time.startOf('month').week();
    const end_week = base_time.endOf('month').week();
    const today = moment().format("DD/MM/yyyy");

    const BlockClick = useCallback((event, date) => {
        if(!event) {
            blockOnClick(date)
        }
    }, [blockOnClick]);

  return (<>
    {_.range(start_week, end_week + 1).map(week => {
        const start_day = moment().week(week).startOf("week").day();
        const end_day = moment().week(week).endOf("week").day();
        return <tr 
            key={`week-${week}`} 
            className="text-center lg:h-20">
            {_.range(end_day, start_day - 1, -1).map(day => {
                const day_base_time = moment().week(week).day(day);
                const day_formatted = day_base_time.format("DD/MM");
                const day_with_year_formatted = day_base_time.format("yyyy-MM-DD");
                const event = events?.find(event => event.Date === day_with_year_formatted) || undefined;
                return <td 
                onClick={() => BlockClick(event, day_with_year_formatted)}
                key={`day-${day}-${week}`}
                className={`${day_with_year_formatted === today ? "bg-slate-300": ""} border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300`}>
                    <div className="flex flex-col h-fit mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                        <div className="top h-5 w-full">
                            <span className="text-gray-500">{day_formatted}</span>
                        </div>
                        { event && <EventConnector event={event}></EventConnector> }
                    </div>
                </td>
            })}</tr>
    })}
  </>);
};

export default DaysInCalendar;
