import React, { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export function LikeButton() {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);
  const [activeBtn, setActiveBtn] = useState("none");
  const [likeBtnColor, setLikeBtnColor] = useState<string>();
  const [dislikeBtnColor, setDislikeBtnColor] = useState<string>();
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      setLikeBtnColor("pink");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      setLikeBtnColor("black");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
      setLikeBtnColor("none");
    }
  };
  const handleDislikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      setDislikeBtnColor("grey");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      setLikeBtnColor("black");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };
  return (
    <div className="btn-container">
      <AiFillLike color={likeBtnColor} size="50" onClick={handleLikeClick} />
      {likeCount}
      <AiFillDislike
        color={dislikeBtnColor}
        size="50"
        onClick={handleDislikeClick}
      />
      {dislikeCount}
    </div>
    // <div className="btn-container">
    //   <button
    //     className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
    //     onClick={handleLikeClick}
    //   >
    //     <span className="material-symbols-rounded"><AiFillLike  /></span>
    //      {likeCount}
    //   </button>

    //   <button
    //     className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
    //     onClick={handleDislikeClick}
    //   >
    //     <span className="material-symbols-rounded"><AiFillDislike /></span>
    //      {dislikeCount}
    //   </button>
    // </div>
  );
}

export default LikeButton;
