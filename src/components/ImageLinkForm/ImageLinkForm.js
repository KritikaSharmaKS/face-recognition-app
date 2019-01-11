import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return (
        <div>
           <p className='f3'>This app will detect faces in your images. Paste any link to an image below.</p>
           <div className='form center pa4 br3 shadow-5'>
               <input className='f4 pa2 w-70 center' type='text'></input>
               <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
           </div>
        </div>
    );
}

export default ImageLinkForm;