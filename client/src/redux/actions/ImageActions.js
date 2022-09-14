import Constants from "../../Constants";
import SendApiRequest from "../../services/ApiService";
import ACTIONS from "./actionsConstants/ImagesActionsConstants";

const GetImages = (images) => ({
    type: ACTIONS.GET_IMAGES,
    payload: images
});

const UploadImage = (form_data, temp_url) => ({
    type: ACTIONS.ADD_IMAGE,
    payload: {
        form_data,
        temp_url 
    }
});

const DeleteImage = (id) => ({
    type: ACTIONS.DELETE_IMAGE,
    payload: id
});

const EditAlt = (id, new_alt) => ({
    type: ACTIONS.EDIT_ALT_IMAGE,
    payload: {
        id,
        alt: new_alt
    }
});

export const GetImagesAction = () => {
    return async (dispatch) => {
        try {
            const { images } = await SendApiRequest('images');
            dispatch(GetImages(images));
        } catch (err) {
            throw err;
        }
    };
};

export const UploadImageAction = (form_data, temp_url) => {
    return async (dispatch) => {
        try {
            dispatch(UploadImage(form_data, temp_url));
            const res = await SendApiRequest('images', Constants.API_METHODS.POST, form_data);
            // update image
        } catch (err) {
            throw err;
        }
    }
};

export const DeleteImageAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch(DeleteImage(id));
            const res = await SendApiRequest(`images/${id}`, Constants.API_METHODS.DELETE);
            // seccessful
        } catch (err) {
            throw err;
        }
    }
};

export const EditAltAction = (id, new_alt) => {
    return async (dispatch) => {
        try {
            dispatch(EditAlt(id, new_alt));
            const res = await SendApiRequest(`images/${id}`, Constants.API_METHODS.PATCH, { 
                alt: new_alt
            });
        } catch (err) {
            throw err;
        }
    }
}