import "./PhotoViewer.scss";
import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Photo {
  id: number;
  camera: {
    full_name: string;
  };
  img_src: string;
  earth_date: string;
}

interface RoverData {
  photos: Photo[];
}

interface MissionDateProps {
  name: string;
}

const MissionDate: React.FC<MissionDateProps> = ({ name }) => {
  let missionDuration: string = "";

  switch (name) {
    case "curiosity":
      missionDuration = "6 August 2012 - present";
      break;
    case "opportunity":
      missionDuration = "24 January 2004 - 10 June 2018";
      break;
    case "spirit":
      missionDuration = "3 January 2004 - 25 May 2011";
      break;
  }

  return <p>Available date range: {missionDuration}</p>;
};

const PhotoViewer: React.FC = () => {
  const [roverData, setRoverData] = useState<RoverData>();
  const [selectedRover, setSelectedRover] = useState<string>("spirit");
  const [coverImageUrl, setCoverImageUrl] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [dateParam, setDateParam] = useState<string>("sol=100");
  const [imageDate, setImageDate] = useState<string>();
  const [camera, setCamera] = useState<string>();
  const [firstRender, setFirstRender] = useState<boolean>(true);

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
    setFirstRender(false);
  };

  const handleImageClick = (url: string, date: string, camera: string) => {
    setCoverImageUrl(url);
    setImageDate(date);
    setCamera(camera);
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
      <h1>Explore images captured by NASA's rovers on Mars</h1>
      <p>
        You can customise your search by selecting one of the three Mars rovers
        and an Earth date
      </p>
      <p>
        We've started you off by selecting images from the Spirit rover on its
        100th day in space
      </p>
      <h2>Please select your rover</h2>
      <div className="buttonContainer">
        <Button onClick={() => handleClick("curiosity")} name="Curiosity" />
        <Button onClick={() => handleClick("spirit")} name="Spirit" />
        <Button onClick={() => handleClick("opportunity")} name="Opportunity" />
      </div>
      {firstRender === false && (
        <p>You've selected {roverNameCapitals} rover</p>
      )}
      <h2>Please select a date</h2>
      {firstRender === false && <MissionDate name={selectedRover} />}
      <div className="datePicker">
        <DatePicker
          minDate={new Date("January 4, 2004")}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <div className="buttonContainer">
        <button onClick={() => handleDateSubmit()}>Search</button>
      </div>
      {roverData.photos.length > 0 && (
        <>
          <div className="coverImageContainer">
            <img src={coverImageUrl} alt="mars rover" className="coverImage" />
          </div>
          {date && camera && (
            <p>
              This image was captured on {imageDate} with a {camera}
            </p>
          )}
          <div className="thumbnails">
            {roverData.photos.slice(0, 23).map((photo: Photo) => (
              <img
                onClick={() =>
                  handleImageClick(
                    photo.img_src,
                    photo.earth_date,
                    photo.camera.full_name,
                  )
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
          <p>No images match this search, please try a different date</p>
        </div>
      )}
    </div>
  );
};

export default PhotoViewer;
