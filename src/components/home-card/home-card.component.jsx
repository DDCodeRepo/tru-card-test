import "./home-card.styles.css";
import { useDispatch } from "react-redux";
import { saveData } from "../../redux/api-data/apiDataSlice";
import { useNavigate } from "react-router-dom";

const HomeCard = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function handleClick() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => dispatch(saveData(data.data)))
      .then(navigate("/userData"))
  }

  return (
    <div>
      <img
        className="tru-img2"
        src={require("../../assets/TruCard-Logo.png")}
        alt="TruCard"
      />
      <button className="load-btn" onClick={handleClick}>
        Load List
      </button>
    </div>
  );
};

export default HomeCard;
