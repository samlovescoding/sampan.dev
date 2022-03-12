import React from "react";

function BlobYouTube(props) {
  return (
    <div className="blob-button">
      <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="blob-gradient-youtube" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#FF0066" stopOpacity="1" />
          <stop offset="100%" stopColor="#800033" stopOpacity="1" />
        </linearGradient>
        <path fill="url(#blob-gradient-youtube)" transform="translate(100 100)">
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur={props.duration}
            values="M44.4,-46.8C58.7,-30.1,72.2,-15.1,76,3.8C79.7,22.6,73.7,45.1,59.4,55.2C45.1,65.2,22.6,62.8,3.4,59.4C-15.8,56,-31.6,51.7,-45.8,41.6C-60.1,31.6,-72.9,15.8,-72.6,0.3C-72.3,-15.2,-58.9,-30.4,-44.7,-47.1C-30.4,-63.7,-15.2,-81.8,-0.1,-81.7C15.1,-81.7,30.1,-63.4,44.4,-46.8Z;
            M33.6,-32.4C46.1,-21,60.7,-10.5,66.2,5.5C71.7,21.4,68,42.9,55.4,55.6C42.9,68.4,21.4,72.5,5.9,66.5C-9.6,60.6,-19.2,44.7,-35.3,31.9C-51.4,19.2,-74.1,9.6,-75.9,-1.9C-77.8,-13.3,-58.8,-26.6,-42.7,-37.9C-26.6,-49.3,-13.3,-58.7,-1.4,-57.3C10.5,-55.9,21,-43.7,33.6,-32.4Z;
            M49.1,-57.9C56,-42.3,48.4,-21.2,47.9,-0.5C47.5,20.2,54,40.4,47.2,55.6C40.4,70.7,20.2,80.9,-1.4,82.3C-23,83.7,-46.1,76.4,-61.6,61.3C-77,46.1,-84.9,23,-79.9,5C-74.8,-13,-56.9,-25.9,-41.4,-41.5C-25.9,-57.1,-13,-75.4,4.1,-79.5C21.2,-83.6,42.3,-73.5,49.1,-57.9Z;
            M44.4,-46.8C58.7,-30.1,72.2,-15.1,76,3.8C79.7,22.6,73.7,45.1,59.4,55.2C45.1,65.2,22.6,62.8,3.4,59.4C-15.8,56,-31.6,51.7,-45.8,41.6C-60.1,31.6,-72.9,15.8,-72.6,0.3C-72.3,-15.2,-58.9,-30.4,-44.7,-47.1C-30.4,-63.7,-15.2,-81.8,-0.1,-81.7C15.1,-81.7,30.1,-63.4,44.4,-46.8Z;"
          />
        </path>
      </svg>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <svg
          className="blob-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="100.24"
          height="70.184"
          viewBox="0 0 100.24 70.184"
          style={{
            transform: "scale(0.8)",
          }}
        >
          <path
            id="youtube"
            d="M98.175,4.9A12.558,12.558,0,0,0,89.34-3.936C81.5-6.082,50.119-6.082,50.119-6.082s-31.376,0-39.22,2.065A12.813,12.813,0,0,0,2.065,4.9C0,12.744,0,29.01,0,29.01S0,45.358,2.065,53.12A12.56,12.56,0,0,0,10.9,61.955C18.826,64.1,50.121,64.1,50.121,64.1s31.376,0,39.22-2.065A12.559,12.559,0,0,0,98.176,53.2c2.064-7.844,2.064-24.11,2.064-24.11s.083-16.349-2.065-24.192ZM40.13,44.037V13.982L66.221,29.01Zm0,0"
            transform="translate(-0.001 6.082)"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}

export default BlobYouTube;
