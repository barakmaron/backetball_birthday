import Constants from '../../Constants';
import SendApiRequest from '../../services/ApiService';
import ACTIONS from './actionsConstants/RecommendationActionsConstants';
import { failedAction, successfulAction } from './ViewActions';

const GetRecommendations = (recommendations) => ({
    type: ACTIONS.GET_RECOMMENDATIONS,
    payload: recommendations
});

const AddRecommendation = (form) => ({
    type: ACTIONS.ADD_RECOMMENDATION,
    payload: form
});

const UpdateRecommendation = (id, recommendation) => ({
    type: ACTIONS.UPDATE_RECOMMENDATION,
    payload: {
        id,
        recommendation
    }
});

const PatchRecommendation = (id, props) => ({
    type: ACTIONS.PATCH_RECOMMENDATION,
    payload: {
        id,
        props
    }
});

const DeleteRecommendation = (id) => ({
    type: ACTIONS.DELETE_RECOMMENDATION,
    payload: id
});

export const GetRecommendationsAction = () => {
    return async (dispatch) => {
        try {
            const recommendations = await SendApiRequest(`recommendation`);
            dispatch(GetRecommendations(recommendations.recommendations));
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.get_recommendation_failed));
        }
    }
};

export const AddRecommendationAction = (form, temp_url) => {
    return async (dispatch) => {
        try {
            const parse_form = Object.fromEntries(form);
            parse_form.TempUrl = temp_url;
            dispatch(AddRecommendation(parse_form));
            const add_recommendation = await SendApiRequest(`recommendation`, Constants.API_METHODS.POST, form);
            dispatch(UpdateRecommendation(undefined, add_recommendation.recommendation));
            dispatch(successfulAction(Constants.user_messages.add_recommendation_successful));
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.add_recommendation_failed));
        }
    }
};

export const UpdateRecommendationAction = (id, props) => {
    return async (dispatch) => {
        try {
            dispatch(PatchRecommendation(id, props));
            await SendApiRequest(`recommendation/${id}`, Constants.API_METHODS.PATCH, props);            
            dispatch(successfulAction(Constants.user_messages.update_recommendation_successful));
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.update_recommendation_failed));
        }
    }
};

export const DeleteRecommendationAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch(DeleteRecommendation(id));
            await SendApiRequest(`recommendation/${id}`, Constants.API_METHODS.DELETE);
            dispatch(successfulAction(Constants.user_messages.delete_recommendation_successful))
        } catch (err) {
            dispatch(failedAction(Constants.user_messages.delete_recommendation_failed));
        }
    }
}