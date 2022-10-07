import React, { useCallback } from 'react';
import Form from '../../Components/Form/Form';
import RecommendationGalleryConnector from '../../Components/RecommendationGallery/RecommendationGalleryConnector';
import Constants from '../../Constants';

const Recommendation = ({
  AddRecommendationAction
}) => {

  const submit = useCallback((event, form, temp_url) => {
    event.preventDefault();
    AddRecommendationAction(form, temp_url);
  }, [AddRecommendationAction]);

  return (<>
    <div className='flex mx-auto w-fit py-5 px-5'>
      <Form inputs={Constants.add_recommendation_form} action={submit} />      
    </div>
    <RecommendationGalleryConnector></RecommendationGalleryConnector>
  </>);
};

export default Recommendation;