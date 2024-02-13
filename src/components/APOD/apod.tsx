import React, { useEffect, useState } from "react";
import { PictureTile } from "./picture_tile";
import "./styles.scss";
interface ApodApi {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export const APOD = () => {
  const [apodData, setApodData] = useState<ApodApi | undefined>();

  useEffect(() => {
    const apodApiData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=QU3jsXCt6UJSAy51UGZedistr2a2g78DgzZK1RLB`,
        );
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Failed to fetch APOD data:", error);
      }
    };
    apodApiData();
  }, []);
  const title = apodData?.title;
  const imageUrl = apodData?.url;
  const info = apodData?.explanation;

  return (
    <div className="apod">
      <PictureTile title={title} imgaeUrl={imageUrl} info={info} />
      {/* <Buttons /> */}
    </div>
  );
};
