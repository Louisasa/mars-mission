import "./PhotoViewer.scss";
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
  const [selectedRover, setSelectedRover] = useState<string>("spirit");
  const [coverImageUrl, setCoverImageUrl] = useState<string>(
    "https://picsum.photos/id/1084/1000/800",
  );
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?api_key=${process.env.REACT_APP_API_KEY}&sol=100`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRoverData(data));
  }, [selectedRover]);

  const handleClick = (roverName: string) => {
    setSelectedRover(roverName);
  };

  const handleImageClick = (url: string) => {
    setCoverImageUrl(url);
  };

  if (!roverData) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div className="mainContainer">
      <h1>Mars Rover Photo Viewer</h1>
      <h2>Please select your Rover</h2>
      <div className="buttonContainer">
        <button onClick={() => handleClick("curiosity")}>Curiosity</button>
        <button onClick={() => handleClick("opportunity")}>Opportunity</button>
        <button onClick={() => handleClick("spirit")}>Spirit</button>
      </div>
      <p>You've selected {selectedRover} rover</p>
      <div>
        <img
          src={coverImageUrl}
          alt="placeholder image"
          className="coverImage"
        />
      </div>

      <div className="thumbnails">
        {roverData.photos.map((photo: Photo) => (
          <img
            onClick={() => handleImageClick(photo.img_src)}
            key={photo.id}
            src={photo.img_src}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoViewer;
