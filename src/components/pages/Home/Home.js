import React, { useState } from "react";
import Journal from "../Journal/Journal";
import { NavLink, Route, useHistory, useLocation } from "react-router-dom";
import { Button, Layout } from "antd";
import LandingPage from "./LandingPage";
import FamilyChart from "../FamilyChart/FamilyChart";
import FamilyPlanning from "../FamilyPlanning/FamilyPlanning";
import HomeEvening from "../HomeEvening/HomeEvening";
import {
  homepaths,
  homelinks,
  journallinks,
  journalpaths,
} from "../../common/links";

const { Header, Content, Sider } = Layout;

function Home() {
  const history = useHistory();
  const location = useLocation();

  const [profile, setProfile] = useState(false);

  const login = () => {
    setProfile(true);
  };

  const logout = () => {
    setProfile(false);
  };

  return (
    <>
      <header>
        <h1>Gospel Planning</h1>
        <nav>
          <NavLink exact to="/" activeStyle={{ backgroundColor: "skyblue" }}>
            Home
          </NavLink>
          {homelinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                activeStyle={{ backgroundColor: "skyblue" }}
                to={homepaths[index]}
              >
                {link}
              </NavLink>
            );
          })}
          {profile == false ? (
            <Button onClick={login}>Login</Button>
          ) : (
            <Button>Profile</Button>
          )}
          {profile && <Button onClick={logout}>Logout</Button>}
        </nav>
      </header>
      <div className="content-container">
        <div className="content">
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home-evening">
            <HomeEvening />
          </Route>
          <Route path="/familyplanning">
            <FamilyPlanning />
          </Route>

          <Route path="/familychart">
            <FamilyChart />
          </Route>
          <Route path="/journal">
            <Journal />
          </Route>
        </div>
        <div className="side-nav">
          <Route path="/journal">
            {journallinks.map((link, index) => {
              return <NavLink to={journalpaths[index]} activeStyle={{backgroundColor: 'skyblue'}}>{link}</NavLink>;
            })}
          </Route>
        </div>
      </div>
    </>
  );
}

export default Home;
