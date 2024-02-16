import LikeDislikeButton from "./like_dislike_button";

interface PictureTileProps {
  title?: string;
  imageUrl?: string;
  info?: string;
}
export const PictureTile: React.FC<PictureTileProps> = ({
  info,
  title,
  imageUrl,
}) => {
  return (
    <div className="image_wrapper" data-test-id="image-and-content">
      <div className="title-container">
        <h1 className="title">Picture of the Day</h1>
        <LikeDislikeButton />
      </div>

      <img src={imageUrl} alt={title} />

      <div className="apod-overlay explanation">
        <div className="text-container">
          <h3>{title}</h3>
          <p data-testid="info">{info}</p>
        </div>
      </div>
    </div>
  );
};
