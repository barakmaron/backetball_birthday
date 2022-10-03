import { Button } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Constants from '../../../Constants';

const CalendarActions = ({
  month,
  year,
  incrementMonthAction,
  decrementMonthAction
}) => {

  const [month_text, setMonthText] = useState(Constants.month_array_heb[month]);

  const increment_call_back = useCallback((event) => {
    event.preventDefault();
    incrementMonthAction();
  }, [incrementMonthAction]);

  const decrement_call_back = useCallback((event) => {
    event.preventDefault();
    decrementMonthAction();
  }, [decrementMonthAction]);


  useEffect(() => {
    setMonthText(Constants.month_array_heb[month]);
  }, [month]);

  return (<>  
    <div>
      <Button 
        onClick={decrement_call_back}>
        <FaArrowLeft></FaArrowLeft>
      </Button>
      <Button 
        onClick={increment_call_back}>
        <FaArrowRight></FaArrowRight>
      </Button>
    </div>
    <span className="text-lg font-bold">
        {`${year} ${month_text}`}
    </span>
  </>);
};

export default CalendarActions;
