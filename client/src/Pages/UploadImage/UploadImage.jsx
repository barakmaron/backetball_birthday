
import { useCallback } from 'react';
import GalleryConnector from '../../Components/Gallery/GalleryConnector';
import Form from '../../Components/Form/Form';
import Constants from '../../Constants';

const UploadImage = ({
    UploadImageAction
}) => {
    const uploadToServer = useCallback((event, form, temp_url) => {
        event.preventDefault();        
        UploadImageAction(form, temp_url);
    }, [UploadImageAction]);

    return (<>
        <div className='flex mx-auto w-fit py-5 px-5'>
            <Form inputs={Constants.upload_image_form} action={uploadToServer} />      
        </div>
        <GalleryConnector></GalleryConnector>
    </>);
}

export default UploadImage;