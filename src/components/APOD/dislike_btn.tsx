import React from "react";
import Radio from "@mui/material/Radio";
import { FormControlLabel } from "@mui/material";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

interface LikeBtnProps {
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
  setDislikeCount: React.Dispatch<React.SetStateAction<number>>;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  activeBtn: string;
  likeCount: number;
  dislikeCount: number;
}
export const DislikeBtn: React.FC<LikeBtnProps> = ({
  setLikeCount,
  setDislikeCount,
  setActiveBtn,
  activeBtn,
  likeCount,
  dislikeCount,
}) => {
  const handleDislikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };
  return (
    <>
      <FormControlLabel
        value="dislike"
        label={dislikeCount}
        className={`btn ${activeBtn === "dislike" ? "dislike active" : "dislike"}`}
        control={
          <Radio
            icon={
              <ThumbDownOffAltOutlinedIcon
                htmlColor="#ffffff80"
                fontSize="large"
              />
            }
            checkedIcon={
              <ThumbDownAltIcon htmlColor="#D4482A" fontSize="large" />
            }
            onChange={handleDislikeClick}
          />
        }
      />
    </>
  );
};
