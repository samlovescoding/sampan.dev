import React from "react";

function BlobFacebook(props) {
  return (
    <div className="blob-button">
      <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="blob-gradient-facebook" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#3FBCFC" stopOpacity="1" />
          <stop offset="100%" stopColor="#002382" stopOpacity="1" />
        </linearGradient>
        <path fill="url(#blob-gradient-facebook)" transform="translate(100 100)">
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur={props.duration}
            values="M43.8,-34.6C57.4,-17.8,69.6,0.4,68.1,18.9C66.5,37.4,51.3,56.1,33.3,61.9C15.4,67.8,-5.2,60.7,-21.5,50.6C-37.8,40.5,-49.7,27.3,-50.5,14.2C-51.4,1.1,-41.3,-11.9,-31.1,-28C-20.8,-44.1,-10.4,-63.2,2.3,-65.1C15.1,-67,30.1,-51.5,43.8,-34.6Z;
            M50.4,-40C57,-31.9,48.3,-11.4,41.7,6.4C35.2,24.2,30.7,39.4,20.3,45.7C10,52,-6.3,49.4,-19.7,42.4C-33.2,35.4,-43.8,23.9,-50.4,7.9C-56.9,-8.1,-59.4,-28.7,-50.3,-37.4C-41.2,-46.1,-20.6,-42.9,0.6,-43.4C21.9,-43.9,43.8,-48.2,50.4,-40Z;
            M57.2,-45.4C69.3,-30.5,71,-6.9,66.9,16.9C62.7,40.7,52.8,64.9,34.4,75.1C16.1,85.3,-10.7,81.6,-33.6,70.4C-56.5,59.1,-75.4,40.3,-74.7,23C-73.9,5.6,-53.4,-10.4,-37.7,-26.2C-22,-42,-11,-57.6,5.8,-62.2C22.6,-66.9,45.1,-60.4,57.2,-45.4Z;
            M43.8,-34.6C57.4,-17.8,69.6,0.4,68.1,18.9C66.5,37.4,51.3,56.1,33.3,61.9C15.4,67.8,-5.2,60.7,-21.5,50.6C-37.8,40.5,-49.7,27.3,-50.5,14.2C-51.4,1.1,-41.3,-11.9,-31.1,-28C-20.8,-44.1,-10.4,-63.2,2.3,-65.1C15.1,-67,30.1,-51.5,43.8,-34.6Z;"
          />
        </path>
      </svg>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <svg
          className="blob-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="106.267"
          height="106.267"
          viewBox="0 0 106.267 106.267"
          style={{
            transform: "scale(0.6)",
          }}
        >
          <path
            id="facebook"
            d="M90.7,0H15.566A15.585,15.585,0,0,0,0,15.566V90.7a15.585,15.585,0,0,0,15.566,15.566h31.34V68.7H34.454V50.02H46.907V37.359a18.7,18.7,0,0,1,18.68-18.68H84.474v18.68H65.587V50.02H84.474L81.361,68.7H65.587v37.567H90.7A15.585,15.585,0,0,0,106.267,90.7V15.566A15.585,15.585,0,0,0,90.7,0Zm0,0"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}

export default BlobFacebook;
