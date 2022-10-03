import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Constants from '../../Constants';
import BlurImageConnector from './BlurImage/BlurImageConnector';


const Gallery = ({ 
  images, 
  GetImagesAction
 }) => {
  
  const [page, setPage] = useState(1);

  useEffect(() => {
    GetImagesAction();
  }, []);

  return (<>
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {images?.filter((image, index) => index < page * Constants.number_images_per_page).map(image => <BlurImageConnector key={`image-${image.id}`} image={image}></BlurImageConnector>)}
        </div>        
    </div>
    <div className='flex w-fit mx-auto my-4'>
    { page * Constants.number_images_per_page < images?.length && 
          <Button 
          onClick={() => setPage(page => page + 1)} 
          variant="contained">הצג עוד תמונות</Button> }
    </div>
  </>);
}

export default Gallery;
