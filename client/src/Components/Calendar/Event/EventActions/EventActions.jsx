import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { FaInfo, FaTrash } from 'react-icons/fa';
import Modal from '../../../Modal/Modal';

const EventActions = ({ 
  event,
  DeleteEventAction
}) => {

  const [show_event_info, setShowEventInfo] = useState(false);

  const DeleteEvent = useCallback((event) => {
    event.stopPropagation();
    DeleteEventAction(event.id);
  }, [DeleteEventAction, event]);

  return (<>
    <div className='h-10 flex justify-center'>
        <div className="absolute flex gap-4 h-fit w-fit px-3 py-3 bg-white cursor-pointer">
            <FaTrash 
            className="text-red-500 text-xl hover:text-black" 
            onClick={(event) => DeleteEvent(event)}></FaTrash>
            <FaInfo 
            className="text-blue-500 text-xl hover:text-black"
            onClick={() => setShowEventInfo(true)}></FaInfo>
        </div>
    </div>
    { show_event_info && <Modal setClose={() => setShowEventInfo(false)}></Modal>}
  </>)
};

export default EventActions;
