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
        <img src={image} alt="car-title" />
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export const ImageArray = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80",
      description: "Ipsum Feugiat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80",
      description: "Ipsum Feugiat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80",
      description: "Ipsum Feugiat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Rhoncus Semper",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Rhoncus Semper",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description: "Rhoncus Semper",
    },
  ];

  return (
    <>
      {images.map(({ image, description }) => {
        return (
          <div className="img-container">
            <img src={image} alt="car" />
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
