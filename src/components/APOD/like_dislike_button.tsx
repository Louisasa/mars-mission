import React, { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import { DislikeBtn } from "./dislike_btn";
import { LikeBtn } from "./like_btn";

export function LikeDislikeButton() {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);
  const [activeBtn, setActiveBtn] = useState("none");

  return (
    <div className="buttons">
      <RadioGroup name="user-like-dislike" className="overlay radioButtons">
        <LikeBtn
          setLikeCount={setLikeCount}
          setActiveBtn={setActiveBtn}
          setDislikeCount={setDislikeCount}
          activeBtn={activeBtn}
          likeCount={likeCount}
          dislikeCount={dislikeCount}
        />

        <DislikeBtn
          setLikeCount={setLikeCount}
          setActiveBtn={setActiveBtn}
          setDislikeCount={setDislikeCount}
          activeBtn={activeBtn}
          likeCount={likeCount}
          dislikeCount={dislikeCount}
        />
      </RadioGroup>
    </div>
  );
}

export default LikeDislikeButton;
