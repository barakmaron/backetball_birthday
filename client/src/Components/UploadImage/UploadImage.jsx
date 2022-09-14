
import { useState, useCallback, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import GalleryConnector from '../Gallery/GalleryConnector';

const UploadImage = ({
    UploadImageAction
}) => {
    const [createObjectUrl, setObjectUrl] = useState("");

    const uploadToClient = useCallback(event => {
        if(event.target.files && event.target.files[0]) {
            const [img] = event.target.files;
            setObjectUrl(URL.createObjectURL(img));
        }
    }, []);

    const uploadToServer = useCallback(async event => {
        event.preventDefault();
        const body = new FormData(event.currentTarget);
        UploadImageAction(body, createObjectUrl);
        setObjectUrl("");
        event.currentTarget.reset();
    }, [createObjectUrl, UploadImageAction]);

    return (
        <div className="py-5">
            <div className="flex flex-col justify-between items-center mx-auto w-fit gap-5">
                <h1 
                className=" font-bold text-xl text-orange-500 my-5" 
                style={{ "fontFamily": "main" }}>Image Upload</h1>
                 <form encType="multipart/form-data" onSubmit={uploadToServer}>
                    <div className="flex justify-center gap-5">
                        <Button
                        variant="outlined"
                        component="label"
                        onChange={uploadToClient}>
                            Add
                            <input
                            type="file"
                            name='image'
                            hidden />
                        </Button>
                        <TextField 
                        type="text" 
                        variant="outlined" 
                        name="alt" 
                        label="Alt"/>
                        <Button 
                        variant="outlined" 
                        type='submit'>upload</Button>
                    </div>
                </form>
                <div className="group w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img 
                    src={createObjectUrl} 
                    className="object-cover"
                    alt=""/>
                </div>
            </div>
            <GalleryConnector></GalleryConnector>
        </div>
    );
}

export default UploadImage;