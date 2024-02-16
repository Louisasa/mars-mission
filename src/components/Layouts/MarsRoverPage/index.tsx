import React, { useEffect } from "react";
import "./styles.scss";
import PhotoViewer from "../../PhotoViewer/PhotoViewer";
import { APOD } from "../../APOD/apod";

const MarsRoverPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mars Mission | Mars Rover";
  }, []);

  return (
    <div className="gutter">
      <div className="mars-rover-page layout">
        <APOD />
      </div>
    </div>
  );
};

export default MarsRoverPage;
