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

  const imagePath = `${process.env.PUBLIC_URL}/Scrollimages/Mars${selectedImage + 1}.png`;

  return (
    <div className="gutter">
      <div className="layout">
        <h1 className="intro-heading">Mars Rovers</h1>
        <h2 className="intro-paragraph">
          {" "}
          We have been working towards going to mars since the 1960s.
        </h2>
        <h2 className="intro-paragraph">
          Starting with fly by mission, then orbiting spacecraft. Currently NASA
          has two active Rovers in Mar: Curiosity and Perseverance.{" "}
        </h2>
        <div className="IntroContainer">
          <div className="MarsImagesScroll">
            <img src={imagePath} alt={`Mars${selectedImage + 1}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
