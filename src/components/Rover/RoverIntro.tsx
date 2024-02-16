import imgCuriosity from "../../assests/Curiosity.jpg";
import imgPerseverance from "../../assests/PerseveranceParts.jpg";
import imgLandingsMap from "../../assests/LandingSites.jpg";
import { useEffect, useState } from "react";
import "./RoverIntro.scss";

export default function RoverIntro() {
  const [selectedImage, setSelectedImage] = useState(0);

  const scrollNextImage = () => {
    setSelectedImage((currentImage) =>
      currentImage < 31 ? currentImage + 1 : 0,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollNextImage();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Generate the path based on the selectedImage index
  const imagePath = `${process.env.PUBLIC_URL}/Scrollimages/Mars${selectedImage + 1}.png`;

  return (
    <div>
      <h1>Mars Rovers</h1>
      <h2> We have been working towards going to mars since the 1960s.</h2>
      <h2>
        {" "}
        Starting with fly by mission, then orbiting spacecraft. Currently NASA
        has two active Rovers in Mar: Curiosity and Perseverance.{" "}
      </h2>
      <div className="IntroContainer">
        <div className="MarsImagesScroll">
          <img src={imagePath} alt={`Mars${selectedImage + 1}`} />
        </div>
      </div>
    </div>
  );
}

/*      
    return (
        <div>
            <h1>Active Mars Rover</h1>
            <h2> There are currently two active Rovers in Mars operated by NASA:</h2>

            <div className="RoverIntroContainer">
                <img src={imgCuriosity} alt="Curiosity Rover" />
                <img src={imgPerseverance} alt="Perseverance Rover" />
            </div>

            <p> There have three previous landings on mars from NASA rovers</p>
            <div  className="LandingMap">
                <img src={imgLandingsMap} alt ="Landing Sites Map"/>
            </div>
        </div>
    )
}
*/
