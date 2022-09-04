import { TextField } from '@mui/material';
import { useState, useCallback } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

const loader = ({ src }) => {
    const encoded = Buffer.from(src).toString('base64');
    return `/api/file/${encoded}`;
}

const BlurImage = ({ image, upload_page }) => {
//    const [isLoading, setLoading] = useState(true);
//    const [edit_alt, setEditAlt] = useState(false);
//    const [changed_alt, setChangedAlt] = useState(image.alt);

//    const delete_image = useCallback(async() => {
//         try {
//             const encoded = Buffer.from(image.location).toString('base64');
//             const delete_image = await fetch(`/api/file/${encoded}`, {
//                 method: "DELETE"
//             });
//         } catch (err) {
            
//         }
//     }, [image]);

//     const change_alt_callback = useCallback(async() => {
//         try {
//             const encoded = Buffer.from(image.location).toString('base64');
//             const body = {
//                 alt: changed_alt
//             };
//             const change_alt_req = await fetch(`/api/file/${encoded}`, {
//                 method: "PATCH",
//                 body: await JSON.stringify(body)
//             });
//             setEditAlt(false);
//         } catch(err){

//         }
//     }, [image, changed_alt])

//   return (<div>
//         <div className="relative group w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
//             <img
//             alt={image.alt}
//             loader={loader}
//             src={image.location}
//             className={cn(
//                 'group-hover:opacity-75 duration-700 ease-in-out object-cover',
//                 isLoading
//                 ? 'grayscale blur-2xl scale-110'
//                 : 'grayscale-0 blur-0 scale-100'
//             )}
//             onLoadingComplete={() => setLoading(false)}
//             />
            
//             { upload_page && 
//             <div>
//                 <div className="absolute bottom-0 flex gap-4 h-fit w-fit px-3 py-3 bg-white cursor-pointer">
//                     <FaTrash 
//                     className="hover:text-red-500 text-xl" 
//                     onClick={delete_image}></FaTrash>
//                     <FaPencilAlt 
//                     className="hover:text-blue-500 text-xl"
//                     onClick={() => setEditAlt(true)}></FaPencilAlt>
//                 </div>
//             </div>}
//         </div>
//         {edit_alt ? 
//         <TextField 
//         className="mx-auto my-2" 
//         variant="outlined" 
//         label="Alt" 
//         placeholder={changed_alt}
//         onChange={e => setChangedAlt(e.target.value)}
//         onBlur={change_alt_callback} /> : 
//         <h3 className="mt-4 text-sm text-gray-700 text-right">{changed_alt}</h3>}
//     </div>);
return <div></div>
}

export default BlurImage;