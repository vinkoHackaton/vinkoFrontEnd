import "./MainPageStyle.css";
import freeAir from "/images/FreeAir.png";
import exercise from "/images/Physical.png";
import culture from "/images/Cultural.png";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import { Link } from "react-router-dom";
function MainPage() {

  return (
    <>
      <Header />
      <div className="hero-container">
        <p className="title">La soledad pesa menos cuando se comparte. </p>
        <p className="title">Camina con alguien que te escuche.</p>
        
          <button className="search-button"><Link to={"/branding"}>Busca Acompañante</Link></button>
      </div>
      <section>
        <h1 className="section-title">Qué quieres hacer hoy?</h1>
        <div className="list-preview">
          <div className="category-item">
            <Link to={"/companion/1"}>
              <img className="categories" src={freeAir}></img>
              <div className="category-label">Aire Libre</div>
            </Link>
          </div>

          <div class="category-item">
            <Link to={"/companion/2"}>
              <img className="categories" src={culture}></img>
              <div class="category-label">Actividades Culturales</div>
            </Link>
            
          </div>

          <div class="category-item">
            <Link to={"/companion/10"}>
              <img className="categories" src={exercise}></img>
              <div class="category-label">Ejercicio Físico</div>
            </Link>
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
