import "./PhotoViewer.scss";
import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [date, setDate] = useState<Date | null>(new Date());
  const [dateParam, setDateParam] = useState<string>("sol=100");
  const [imageDate, setImageDate] = useState<string>();

  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?api_key=${process.env.REACT_APP_API_KEY}&${dateParam}`;

  var roverNameCapitals =
    selectedRover.charAt(0).toUpperCase() + selectedRover.substring(1);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRoverData(data);
        if (data.photos.length > 0) {
          setCoverImageUrl(data.photos[0].img_src);
        } else {
          setCoverImageUrl("");
        }
      });
  }, [selectedRover, dateParam]);

  const handleClick = (roverName: string) => {
    setSelectedRover(roverName);
  };

  const handleImageClick = (url: string, date: string) => {
    setCoverImageUrl(url);
    setImageDate(date);
  };

  const handleDateSubmit = () => {
    if (date) {
      let stringDate = date.toISOString().slice(0, 10);
      let newDateParam = "earth_date=" + stringDate;
      setDateParam(newDateParam);
    }
  };

  if (!roverData) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div className="mainContainer">
      <h1 className="rover-heading">Mars Rover Photo Viewer</h1>
      <h2 className="rover-subheading">Please select your rover</h2>
      <div className="buttonContainer">
        <Button onClick={() => handleClick("curiosity")} name="Curiosity" />
        <Button onClick={() => handleClick("spirit")} name="Spirit" />
        <Button onClick={() => handleClick("opportunity")} name="Opportunity" />
      </div>
      <p className="rover-paragraph">
        You've selected {roverNameCapitals} rover
      </p>
      <h2 className="rover-subheading">Please select a date</h2>
      <DatePicker
        minDate={new Date("January 4, 2004")}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd-MM-yyyy"
      />
      <div className="buttonContainer">
        <button onClick={() => handleDateSubmit()}>Submit</button>
      </div>
      {roverData.photos.length > 0 && (
        <>
          <div className="coverImageContainer">
            <img src={coverImageUrl} alt="mars rover" className="coverImage" />
          </div>
          {imageDate && <p>This image was captured on {imageDate}</p>}
          <div className="thumbnails">
            {roverData.photos.slice(0, 23).map((photo: Photo) => (
              <img
                onClick={() =>
                  handleImageClick(photo.img_src, photo.earth_date)
                }
                key={photo.id}
                src={photo.img_src}
                alt="mars rover"
                className={photo.img_src === coverImageUrl ? "border" : ""}
              />
            ))}
          </div>
        </>
      )}
      {roverData.photos.length === 0 && (
        <div>
          <p className="rover-paragraph">
            No images match this search, please try a different date
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoViewer;
