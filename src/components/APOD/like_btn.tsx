import React from "react";
import Radio from "@mui/material/Radio";
import { FormControlLabel } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

interface LikeBtnProps {
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
  setDislikeCount: React.Dispatch<React.SetStateAction<number>>;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  activeBtn: string;
  likeCount: number;
  dislikeCount: number;
}
export const LikeBtn: React.FC<LikeBtnProps> = ({
  setLikeCount,
  setDislikeCount,
  setActiveBtn,
  activeBtn,
  likeCount,
  dislikeCount,
}) => {
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  return (
    <>
      <FormControlLabel
        value="like"
        label={likeCount}
        className={`btn ${activeBtn === "like" ? "like active" : "like"}`}
        control={
          <Radio
            icon={
              <ThumbUpOutlinedIcon htmlColor="#ffffff80" fontSize="large" />
            }
            checkedIcon={<ThumbUpIcon htmlColor="#ff0063" fontSize="large" />}
            onChange={handleLikeClick}
          />
        }
      />
    </>
  );
};
