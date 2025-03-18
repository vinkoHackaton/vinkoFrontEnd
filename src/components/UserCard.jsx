import "./UserCard.css";

const UserCard = ({ name, description }) => {
  return (
    <>
      <div className="bg-green">
        <div className="picture">
          <img id="profile-pic" src="/profilepic.png" alt="profilepic" />
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="row">
          <button className="user-btn info-btn">Ver más sobre mí</button>
          <button className="user-btn">
            <img id="handshake" src="/BuyButton.png" alt="hanshake" />
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
