import "./Portfolio.css";

export const Portfolio = ({ title, text }: any) => {
  return (
    <>
      <div className="portfolio">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export const Image = ({ image, description }: any) => {
  return (
    <>
      <div className="img-container">
        <img src={image} alt="image" />
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
