import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./profileScreen.css";

const ProfileScreens = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <h4>Renewal date:</h4>

              <div className="profileScreen__plan">
                <div className="profileScreen__planLeft">
                  <p>Netflix Standard</p>
                  <p>1080p</p>
                </div>
                <button className="profileScreen__planButton">
                  Subscribe
                </button>
              </div>

              <div className="profileScreen__plan">
                <div className="profileScreen__planLeft">
                  <p>Netflix Basic</p>
                  <span>480p</span>
                </div>
                <button className="profileScreen__planButton">
                  Subscribe
                </button>
              </div>

              <div className="profileScreen__plan">
                <div className="profileScreen__planLeft">
                  <p>Netflix Premium</p>
                  <p>4k+HDR</p>
                </div>
                <button className="profileScreen__planButton">
                  Subscribe
                </button>
              </div>

              <button
                onClick={() => {
                  history.push("/");
                  auth.signOut();
                }}
                type="submit"
                className="profileScreen__signOut "
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreens;
