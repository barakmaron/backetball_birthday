import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { StaticFileLoader } from '../../../services/ApiService';

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

const BlurImage = ({ 
    image, 
    upload_page,
    DeleteImageAction,
    EditAltAction
}) => {
   const [isLoading, setLoading] = useState(true);
   const [image_obj, setImageObj] = useState(null);
   const [edit_alt, setEditAlt] = useState(false);
   const [changed_alt, setChangedAlt] = useState(image.Alt);

   const delete_image = useCallback(async() => {
        DeleteImageAction(image.id);
    }, [image, DeleteImageAction]);

    const change_alt_callback = useCallback(async() => {
        EditAltAction(image.id, changed_alt);
        setEditAlt(false);
    }, [image, changed_alt, EditAltAction]);

    const image_loader = useCallback(async() => {
        setLoading(true);
        const image_loader = image.TempUrl ? image.TempUrl : await StaticFileLoader(image.Location, 'images');
        setImageObj(image.TempUrl ? image.TempUrl : URL.createObjectURL(image_loader));
        setLoading(false);
    }, [image]);

    useEffect(() => {        
        image_loader();
    }, []);

  return (<div>
        <div className="relative group w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            {!isLoading && <img
            alt={image.Alt}
            src={image_obj}
            className={cn(
                'group-hover:opacity-75 duration-700 ease-in-out object-cover',
                isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )} />}
            
            { upload_page && 
            <div>
                <div className="absolute bottom-0 flex gap-4 h-fit w-fit px-3 py-3 bg-white cursor-pointer">
                    <FaTrash 
                    className="hover:text-red-500 text-xl" 
                    onClick={delete_image}></FaTrash>
                    <FaPencilAlt 
                    className="hover:text-blue-500 text-xl"
                    onClick={() => setEditAlt(true)}></FaPencilAlt>
                </div>
            </div>}
        </div>
        {edit_alt ? 
        <TextField 
        className="mx-auto my-2" 
        variant="outlined" 
        label="Alt" 
        placeholder={changed_alt}
        onChange={e => setChangedAlt(e.target.value)}
        onBlur={change_alt_callback} /> : 
        <h3 className="mt-4 text-sm text-gray-700 text-right">{changed_alt}</h3>}
    </div>);
}

export default BlurImage;