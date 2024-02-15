import React from "react";
import "./styles.scss";
import PhotoViewer from "../../PhotoViewer/PhotoViewer";

const MarsRoverPage: React.FC = () => {
  return (
    <div className="gutter">
      <div className="mars-rover-page layout">
        <PhotoViewer />
      </div>
    </div>
  );
};

export default MarsRoverPage;
