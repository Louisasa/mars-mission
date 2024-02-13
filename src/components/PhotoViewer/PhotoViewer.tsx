import React from "react";
import { useState, useEffect } from "react";

interface RoverData {
  photos: {
    img_src: string;
  }[];
}

const PhotoViewer: React.FC = () => {
  const [roverData, setRoverData] = useState<RoverData>();
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?api_key=${process.env.REACT_APP_API_KEY}&earth_date=2008-10-16`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRoverData(data));
  }, []);

  if (!roverData) {
    return <h1>Waiting for data</h1>;
  }

  return <img src={roverData.photos[0].img_src} />;
};

export default PhotoViewer;
