import "./home.styles.css";

import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authToggle } from "../../redux/user/userSlice";

import HomeCard from "../../components/home-card/home-card.component";

const Home = () => {

  const auth = useSelector((state) => state.user.auth)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutClicked = (event) => {
    dispatch(authToggle(false));
  };

  useEffect(()=>{
    if(auth===false){
      navigate("/");
    }
  })

  return (
    <div>
      <button className="logout-btn" onClick={logOutClicked}>Log Out</button>
      <HomeCard/>
    </div>
  );
};

export default Home;
