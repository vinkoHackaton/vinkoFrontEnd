import "./MainPageStyle.css";
import freeAir from "/images/FreeAir.png";
import exercise from "/images/Physical.png";
import culture from "/images/Cultural.png";
import Footer from "../../components/Footer.jsx";

function MainPage() {
  return (
    <>
      <div className="hero-container">
        <p className="title">La soledad pesa menos cuando se comparte. </p>
        <p className="title">Camina con alguien que te escuche.</p>
        <button className="search-button">Busca Acompañante</button>
      </div>
      <section>
        <h1 className="section-title">Qué quieres hacer hoy?</h1>
        <div className="list-preview">
          <div className="category-item">
            <a href="/aire-libre">
              <img className="categories" src={freeAir}></img>
              <div className="category-label">Aire Libre</div>
            </a>
          </div>

          <div class="category-item">
            <a href="/actividades-culturales">
              <img className="categories" src={culture}></img>
              <div class="category-label">Actividades Culturales</div>
            </a>
          </div>

          <div class="category-item">
            <a href="/ejercicio-fisico">
              <img className="categories" src={exercise}></img>
              <div class="category-label">Ejercicio Físico</div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2 className="section-title"> Anuncios Destacados</h2>
        <div className="featured-ads-container">
          <div className="featured-ad">
            <img src={""} className="ad-image" />
            <div className="ad-details">
              <h3 className="add-title">{""}</h3>
              <p className="ad-person">{""}</p>
            </div>
          </div>

          <div className="featured-ad">
            <img src={""} className="ad-image" />
            <div className="ad-details">
              <h3 className="add-title">{""}</h3>
              <p className="ad-person">{""}</p>
            </div>
          </div>
          <div className="featured-ad">
            <img src={""} className="ad-image" />
            <div className="ad-details">
              <h3 className="add-title">{""}</h3>
              <p className="ad-person">{""}</p>
            </div>
          </div>
          <div className="featured-ad">
            <img></img>
            <img src={""} className="ad-image" />
            <div className="ad-details">
              <h3 className="add-title">{""}</h3>
              <p className="ad-person">{""}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MainPage;
