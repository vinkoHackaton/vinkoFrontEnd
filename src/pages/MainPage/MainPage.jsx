import "./MainPageStyle.css";
import hero from "/images/CoverImage.png";
import freeAir from "/images/FreeAir.png";
import exercise from "/images/Physical.png";
import culture from "/images/Cultural.png";

function MainPage() {
  return (
    <>
      <div className="hero-container">
        <img className="hero-image" src={hero}></img>
      </div>
      <section>
        <p className="section-title">Qué quieres hacer hoy?</p>
        <div className="list-preview">
          <div>
            <img className="categories" src={freeAir}></img>
          </div>
          <div>
            <img className="categories" src={culture}></img>
          </div>
          <div>
            <img className="categories" src={exercise}></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
