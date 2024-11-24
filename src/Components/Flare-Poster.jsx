import React, { useEffect, useState } from 'react';
import posterImg from '../assets/event2.png'
import { RiArrowDownWideFill, RiCameraLensFill } from 'react-icons/ri';


const Flare_Poster = ({ flayerPoster }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Update local image preview

      flayerPoster((prevData) => ({
        ...prevData,
        // flyer: file,
        flyer: imageUrl,
      }));

      console.log(imageUrl)
    }
  };




  return (
    <>
      <div className='mt-5  flex items-center justify-between bg-black px-4 py-3 rounded-[10px] mb-2'>
        <span className='text-[12px]'>Flayer Poster</span> <RiArrowDownWideFill />
      </div>


      <div className='event-poster'>

        <label htmlFor='posterflayer' className='poster-btn flex items-center gap-2'>
          <RiCameraLensFill className='text-[12px] text-black' />
          <label  className='text-[10px] text-black'>Add Flayer</label>
          <input type='file' style={{display:"none"}} name='posterflayer' id='posterflayer' accept='image/*' onChange={handleFileChange}/>
        </label>

{selectedImage?  <img src={selectedImage} /> :     <p className='text-placeholder'>400 X 500</p> }
    
       
      </div>
    </>
  )
}

export default Flare_Poster