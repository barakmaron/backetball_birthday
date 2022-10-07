import React, { useEffect } from 'react';
import RecommendationConnector from './Recommendation/RecommendationConnector';

const RecommendationGallery = ({
    GetRecommendationsAction,
    recommendations
}) => {
    useEffect(() => {
        GetRecommendationsAction();
    }, [GetRecommendationsAction]);  

  return (
    <div className='flex flex-col gap-5 justify-center items-center py-5'>
        <h2 className='sm:text-4xl text-2xl text-orange-600 font-bold w-fit'>המלצות</h2>
        <div className='flex gap-4 mx-10'>
            {recommendations.map((recommendation) => {
                return <RecommendationConnector key={`recommendation-${recommendation.id}`} {...recommendation}></RecommendationConnector>
            })}
        </div>
    </div>
  )
}

export default RecommendationGallery;