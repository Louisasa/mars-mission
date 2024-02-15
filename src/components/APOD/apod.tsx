import React, { useEffect, useState } from "react";
import { PictureTile } from "./picture_tile";
import { ApiDefaultResponse } from "./default_api_data";
import { LoadingSpinner } from "./loading_spinner";
import "./styles.scss";
import { LikeButton } from "./like_dislike_button";
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
  const [loading, setLoading] = useState(false);
  const [apodData, setApodData] = useState<ApodApi | undefined>();

  useEffect(() => {
    const apodApiData = async () => {
      try {
        setLoading(true);
        //setApodData(ApiDefaultResponse);
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=QU3jsXCt6UJSAy51UGZedistr2a2g78DgzZK1RLB`,
        );
        if (response.status === 200) {
          const data = await response.json();
          setApodData(data);
        } else {
          setApodData(ApiDefaultResponse);
        }
      } catch (error) {
        console.error("Failed to fetch APOD data:", error);
      } finally {
        setLoading(false);
      }
    };
    apodApiData();
  }, []);
  const title = apodData?.title;
  const imageUrl = apodData?.url;
  const info = apodData?.explanation;

  return (
    <>
      {apodData && (
        <div className="apod">
          <PictureTile title={title} imgaeUrl={imageUrl} info={info} />
          <LikeButton />
        </div>
      )}
      {loading && <LoadingSpinner />}
    </>
  );
};
