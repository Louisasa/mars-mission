import "./PhotoViewer.scss";
import React from "react";
import { useState, useEffect } from "react";

interface Photo {
  id: number;
  img_src: string;
  earth_date: string;
}

interface RoverData {
  photos: Photo[];
}

const PhotoViewer: React.FC = () => {
  const [roverData, setRoverData] = useState<RoverData>();
  const [selectedRover, setSelectedRover] = useState<string>("spirit");
  const [coverImageUrl, setCoverImageUrl] = useState<string>("");
  const [date, setDate] = useState<string>();
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?api_key=${process.env.REACT_APP_API_KEY}&sol=100`;

  var roverNameCapitals =
    selectedRover.charAt(0).toUpperCase() + selectedRover.substring(1);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRoverData(data);
        setCoverImageUrl(data.photos[0].img_src);
      });
  }, [selectedRover]);

  const handleClick = (roverName: string) => {
    setSelectedRover(roverName);
  };

  const handleImageClick = (url: string, date: string) => {
    setCoverImageUrl(url);
    setDate(date);
  };

  if (!roverData) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div className="mainContainer">
      <h1>Mars Rover Photo Viewer</h1>
      <h2>Please select your rover</h2>
      <div className="buttonContainer">
        <button onClick={() => handleClick("curiosity")}>Curiosity</button>
        <button onClick={() => handleClick("spirit")}>Spirit</button>
        <button onClick={() => handleClick("opportunity")}>Opportunity</button>
      </div>
      <p>You've selected {roverNameCapitals} rover</p>
      <div className="coverImageContainer">
        <img src={coverImageUrl} alt="mars rover" className="coverImage" />
      </div>
      {date && <p>This image was captured on {date}</p>}
      <div className="thumbnails">
        {roverData.photos.slice(0, 23).map((photo: Photo) => (
          <img
            onClick={() => handleImageClick(photo.img_src, photo.earth_date)}
            key={photo.id}
            src={photo.img_src}
            alt="mars rover"
            className={photo.img_src === coverImageUrl ? "border" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoViewer;
