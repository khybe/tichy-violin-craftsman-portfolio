import homePageData from "../Data/homePageData";
import "./CSS/HomePage.css";

const HomePage = ({ language }) => {
  return (
    <section id="home">
      <div className="home-profile">
        <h2>{homePageData[language].title}</h2>
        <p>{homePageData[language].text}</p>
        <p>{homePageData[language].seoKeywords}</p>
      </div>
      <div className="home-image-grid" role="list">
        {homePageData.gridImages.map((image, index) => (
          <div key={index} className="home-image-item" role="listitem">
            <img src={image} alt="Violin Maker's Workshop" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
