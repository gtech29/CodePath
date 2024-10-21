import "../components/PictureGrid.css";

const PictureGrid = ({ pictures }) => {
  return (
    <div className="pictures-grid">
      {pictures.map((picture, index) => (
        <div key={index} className="picture-card">
          <img src={picture.url} alt={picture.title} className="picture" />
          <div className="picture-details">
            <h3>{picture.title}</h3>
            <p>{picture.date}</p>
            <p>{picture.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;
