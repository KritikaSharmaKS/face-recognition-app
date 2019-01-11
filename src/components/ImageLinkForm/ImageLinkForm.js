import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return (
        <div className="">
           <p>This app will detect faces in your images. Paste any link to an image below.</p>
           <div>
               <input type='text'></input>
               <button>Detect</button>
           </div>
        </div>
    );
}

export default ImageLinkForm;