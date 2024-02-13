import React from "react";
import { useState, useEffect } from "react";

interface Photo {
  id: number;
  img_src: string;
}

interface RoverData {
  photos: Photo[];
}

const PhotoViewer: React.FC = () => {
  const [roverData, setRoverData] = useState<RoverData | undefined>(undefined);
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?api_key=${process.env.REACT_APP_API_KEY}&earth_date=2008-10-16`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRoverData(data));
  }, []);

  if (!roverData) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div>
      {roverData.photos.map((photo: Photo) => (
        <img key={photo.id} src={photo.img_src} alt="" />
      ))}
    </div>
  );
};

export default PhotoViewer;
