import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ name, description, imageUrl, id }) => {

  console.log(imageUrl)
  return (
    <>
      <div className="bg-green">
        <div className="picture">
          <img className="profile-pic" src={imageUrl && imageUrl.startsWith('blob') ? "/images/profilepic.png" : imageUrl} alt="profilepic" />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="row">
          <Link to={`/companion/${id}`}>
            <button className="user-btn info-btn">Ver más sobre mí</button>
          </Link>
          <button className="user-btn handshake-button"></button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
