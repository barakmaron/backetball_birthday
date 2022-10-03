import moment from 'moment';
import React, { useState } from 'react';
import _ from 'lodash';
import Constants from '../../Constants';

const DaysHeader = ({ }) => {
  const time = moment().endOf('week');

  return (
    <tr>
      {_.range(0, 7).map(day_in_week => {        
        const ret = <th 
        className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs' 
        key={`DaysHeader-${day_in_week}`}>
          <span className='xl:block lg:block md:block '>{ Constants.days_array_heb[time.day()] }</span>
          </th>;
        time.subtract(1, 'day');
        return ret;
      })}
    </tr>
  )
};

export default DaysHeader;
