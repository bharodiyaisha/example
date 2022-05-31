/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useRef } from "react";

import "./imageVideo.scss";

const ImageVideo = () => {
  const [file, setFile] = useState("");
  const [source, setSource] = useState("");
  const inputRef = useRef("");
  const videoRef = useRef("");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const videoHandle = (e) => {
    setSource(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container">
     
        <div className="image_div">
        <h2>Add Image:</h2>
        <input
          type="file"
          accept=".gif,.jpg ,.png,.jpeg"
          onChange={handleChange}
          ref={inputRef}
        />
        <button
          type="button"
          onClick={() => setFile((inputRef.current.value = ""))}
        >
          Remove Image
        </button>
       
         {<img src={file}  className="image"/>}
         
        </div>
        <div className="image_div">
        <h2>Add Video:</h2>
        <input
          type="file"
          accept=".mov,.mp4"
          onChange={videoHandle}
          ref={videoRef}
        />
        <button
          type="button"
          onClick={() => setSource((videoRef.current.value = ""))}
        >
          Remove Video
        </button>

        {source && (
          <video
            width={400}
            height={300}
            controls
            src={source}
          />
        )}
        </div>
      </div>
    
  );
};
export default ImageVideo;
