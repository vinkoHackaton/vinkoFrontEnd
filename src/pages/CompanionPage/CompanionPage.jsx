import profilePic from "/images/UserProfilePic.jpg";
import locationPin from "/images/locationpin.png";
import accept from "/images/acceptIcon.png";

//completar campos una vez que tengamos llamada a la API y borrar texto

function CompanionPage({ name, description, location }) {
  return (
    <>
      <section className="user-profile_page">
        <div className="user-profile_data">
          <img className="user-profile_picture" src={profilePic} />
          <div>
            <div className="user-profile_coso">
              <h1 className="user-profile_name">{name} Nombre y Apellido </h1>
              <span className="user-profile_location">
                <img src={locationPin} />
                {location}
              </span>
            </div>
            <div className="user-profile_needs">
              Ofrezco:
              <span> Deporte </span>
            </div>
          </div>
        </div>

        <p className="user-profile_description">
          {description}
          Soy una mujer mayor, tranquila y amable, que disfruta de las cosas
          sencillas de la vida como salir a caminar. La lectura es una de mis
          grandes pasiones; siempre tengo un libro entre manos y disfruto de las
          historias que me transportan a otros mundos. También me gusta sentarme
          en una cafetería acogedora, tomar un buen café y simplemente observar
          el ir y venir de la gente. Busco a alguien que quiera acompañarme en
          mis paseos, alguien con quien compartir una charla amena, una risa
          espontánea y el placer de una buena compañía.
        </p>
        <div className="buttons-container">
          <button className="ad-button">
            <img src={accept} width="30" height="31" /> Aceptar
          </button>
        </div>
      </section>
    </>
  );
}

export default CompanionPage;
