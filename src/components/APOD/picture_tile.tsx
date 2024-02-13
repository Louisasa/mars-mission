interface PictureTileProps {
  title?: string;
  imgaeUrl?: string;
  info?: string;
}
export const PictureTile: React.FC<PictureTileProps> = ({
  info,
  title,
  imgaeUrl,
}) => {
  return (
    <div className="image_wrapper">
      <img src={imgaeUrl} alt={title} />

      <div className="overlay title">
        <h1>Picture of the Day</h1>
      </div>

      <div className="overlay explanation">
        <div className="text-container">
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};
