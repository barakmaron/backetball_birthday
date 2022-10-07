import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Constants from '../../Constants';
import RecommendationConnector from './Recommendation/RecommendationConnector';

const RecommendationGallery = ({
    GetRecommendationsAction,
    recommendations
}) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        GetRecommendationsAction();
    }, [GetRecommendationsAction]);  

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className='sm:text-4xl text-2xl text-orange-600 font-bold w-fit mx-auto'>המלצות</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {recommendations?.filter((image, index) => index < page * Constants.number_of_recommendation_per_page).map((recommendation) => {
                return <RecommendationConnector key={`recommendation-${recommendation.id}`} {...recommendation}></RecommendationConnector>
            })}
        </div>
        <div className='flex w-fit mx-auto my-4'>
        { page * Constants.number_of_recommendation_per_page !== recommendations?.length && 
            <Button 
            onClick={() => setPage(page => page + 1)} 
            variant="contained">הצג עוד המלצות</Button> }
        </div>
    </div>
  )
}

export default RecommendationGallery;