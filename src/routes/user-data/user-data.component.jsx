import "./user-data.styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authToggle } from "../../redux/user/userSlice";
import UserCard from "../../components/user-card/user-card.component";

import Modal from "react-modal";
import { modalData } from "../../redux/card-modal/cardModalSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  //subtitle.style.color = '#f00';
}

const UserData = () => {
  const apiDataVal = useSelector((state) => state.apiData.apiDataVal);
  const [searchField, setSearchField] = useState("");
  const auth = useSelector((state) => state.user.auth);
  const cardM = useSelector((state) => state.cardModal.cardModalVal);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function closeModal() {
    dispatch(modalData({ modVal: false, name: "" }));
  }

  const changeHandler = (event) => {
    setSearchField(event.target.value);
  };

  const logOutClicked = (event) => {
    dispatch(authToggle(false));
  };

  useEffect(() => {
    if (auth === false) {
      navigate("/");
    }
  });

  return (
    <div>
      <Modal
        isOpen={cardM.modVal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {cardM.name}
      </Modal>
      <button className="logout-btn" onClick={logOutClicked}>
        Log Out
      </button>
      <input className="search-bar" onChange={changeHandler} />
      <div className="user-card-container">
        {apiDataVal
          .filter((item) => {
            return item.first_name.includes(searchField);
          })
          .map((item) => (
            <UserCard itemVal={item} key={item.id}/>
          ))}
      </div>
    </div>
  );
};

export default UserData;
