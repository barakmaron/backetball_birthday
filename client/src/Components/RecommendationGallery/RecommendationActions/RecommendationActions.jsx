import React, { useCallback, useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import Modal from '../../Modal/Modal';

const RecommendationActions = ({
    logged_in,
    id,
    DeleteRecommendationAction,
    setEdit
}) => {

    const delete_recommendation = useCallback((event) => {
        event.preventDefault();
        DeleteRecommendationAction(id);
    }, [DeleteRecommendationAction, id]);

  return logged_in && (<div className='h-10 flex justify-center'>
    <div className="absolute flex gap-4 h-fit w-fit px-3 py-3 bg-white cursor-pointer">
        <FaTrash 
        className="text-red-500 text-xl hover:text-black" 
        onClick={(e) => delete_recommendation(e)}></FaTrash>
        <FaPencilAlt 
        className="text-blue-500 text-xl hover:text-black"
        onClick={() => setEdit(true)}></FaPencilAlt>
    </div>
</div>);
};

export default RecommendationActions;