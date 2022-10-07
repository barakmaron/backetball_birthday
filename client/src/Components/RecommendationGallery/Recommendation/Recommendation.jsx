import React, { useState, useCallback, useEffect } from 'react';
import { StaticFileLoader } from '../../../services/ApiService';
import _ from 'lodash';
import { AiTwotoneStar } from 'react-icons/ai';
import RecommendationActionsConnector from '../RecommendationActions/RecommendationActionsConnector';
import useImageLoader from '../../../Hooks/useImageLoader';
import { TextareaAutosize } from '@mui/material';

const Recommendation = ({
    id,
    Name,
    Image,
    Rating,
    Text,
    TempUrl,
    UpdateRecommendationAction
}) => {
    const [show_edit, setEdit] = useState(false);
    const [text, setText] = useState(Text);

    const [isLoading, image_obj] = useImageLoader(Image, TempUrl);

    const submit_edit = useCallback((event) => {
        setEdit(false);
        UpdateRecommendationAction(id, { Text: text });
    }, [UpdateRecommendationAction, id, text]);

  return (<div
            className="flex flex-col justify-center items-center gap-5 rounded-lg shadow-lg py-5 px-2">
            {!isLoading && <img
                alt={Name}
                src={image_obj}
                className={`
                    group-hover:opacity-75 duration-700 ease-in-out object-cover w-40 h-40
                    ${isLoading
                    ? 'grayscale blur-2xl scale-110'
                    : `rounded-full bg-top border-green-600 border-4 border-solid`}`}
                />}
            <h3 className='text-orange-600 text-xl'>{Name}</h3>
            <div className='flex gap-2 text-amber-500'>
                {_.range(0, Rating).map(star_index => {
                    return <AiTwotoneStar key={`recommendation-${id}-star-${star_index}`}></AiTwotoneStar>
                })}
            </div>                    
            {show_edit ? <TextareaAutosize 
                value={text}
                name="Text" 
                minRows={3} 
                className=" border-2 py-2 px-2 border-black border-solid"
                onChange={(e) => setText(e.currentTarget.value)}
                onBlur={submit_edit} />
                : <p dir='rtl' className='text-center px-2 w-full h-fit'>{text}</p>}
            <RecommendationActionsConnector id={id} setEdit={setEdit}></RecommendationActionsConnector>                    
        </div>
        );
};

export default Recommendation;