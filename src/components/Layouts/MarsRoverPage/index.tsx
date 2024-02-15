import React, { useEffect } from "react";
import "./styles.scss";
import PhotoViewer from "../../PhotoViewer/PhotoViewer";

const MarsRoverPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mars Mission | Mars Rover";
  }, []);

  return (
    <div className="gutter">
      <div className="mars-rover-page layout">
        <PhotoViewer />
      </div>
    </div>
  );
};

export default MarsRoverPage;
