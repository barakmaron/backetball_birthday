import { v4 as uuid } from 'uuid';
import ACTIONS from "../actions/actionsConstants/ImagesActionsConstants";

const initState = {
    images: []
};

const reducer = (state, action) => {
    const { type, payload } =  action;

    switch (type) {
        case ACTIONS.GET_IMAGES: {
            return { images: payload };
        }
        case ACTIONS.ADD_IMAGE: {
            return { 
                images: [ ...state.images,
                {
                    id: uuid(),
                    Location: payload.form_data.get("image").name,
                    Alt: payload.form_data.get("alt"),
                    TempUrl: payload.temp_url
                }
            ]};
        }
        case ACTIONS.DELETE_IMAGE: {
            return { 
                images: state.images.filter(image => image.id !== payload)
            };
        }
        case ACTIONS.EDIT_ALT_IMAGE: {
            const { id, alt } = payload;
            const new_images_array = [...state.images];
            const image_to_change = new_images_array.find(image => image.id === id);
            image_to_change.Alt = alt;
            return { images: new_images_array };
        }
        default: {
            return { ...initState };
        }
    }
};

export default reducer;