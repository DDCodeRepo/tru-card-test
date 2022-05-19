import "./user-card.styles.css";

import { useDispatch } from "react-redux";
import { modalData } from "../../redux/card-modal/cardModalSlice";

const UserCard = ({ itemVal }) => {
  const { avatar, first_name, last_name, email } = itemVal;
  const dispatch = useDispatch();

  const cardClick = () => {
    dispatch(modalData({ modVal: true, name: itemVal.first_name+" "+itemVal.last_name }));
  };

  return (
    <div className="user-card" onClick={cardClick}>
      <img className="card-img" src={avatar} alt="avatar"/>
      <div>
        <h4>
          <b>{first_name + " " + last_name}</b>
        </h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
