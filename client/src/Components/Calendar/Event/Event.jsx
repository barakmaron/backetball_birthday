import React from 'react';
import EventActionsConnector from './EventActions/EventActionsConnector';

const Event = ({ 
  logged_in, 
  event 
}) => {
  return (<div className='relative'>
    <div className="bg-red-400 text-white rounded p-1 text-lg mb-1 h-full flex justify-center items-center">
        <span className="event-name">
        תפוס
        </span>        
    </div>
    { logged_in && <EventActionsConnector event={event}></EventActionsConnector>}
  </div>);
};

export default Event;
