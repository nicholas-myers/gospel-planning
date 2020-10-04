import React, { useState } from "react";
import Journal from "../Journal/Journal";
import { Route, useHistory, useLocation } from "react-router-dom";
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
  console.log(location.pathname);

  const handleLink = (path) => {
    history.push(path);
  };

  const [profile, setProfile] = useState(false);

  const login = () => {
    setProfile(true);
  };

  const logout = () => {
    setProfile(false);
  };

  return (
    <Layout
      style={{
        backgroundColor: "skyblue",
        display: "flex",
        flexFlow: "column",
      }}
    >
      <Header style={{ backgroundColor: "seagreen" }}>
        <h1>Gospel Planning</h1>
        <nav>
          {homelinks.map((link, index) => {
            return (
              <Button onClick={() => handleLink(homepaths[index])}>
                {link}
              </Button>
            );
          })}
          {profile == false ? (
            <Button onClick={login}>Login</Button>
          ) : (
            <Button>Profile</Button>
          )}
          {profile && <Button onClick={logout}>Logout</Button>}
        </nav>
      </Header>
      <Content
        style={{
          margin: "0 2rem",
          height: "100vh",
          backgroundColor: "skyblue",
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-between",
        }}
      >
        <Route path="/home-evening">
          <HomeEvening />
        </Route>
        <Route path="/familyplanning">
          <FamilyPlanning />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/familychart">
          <FamilyChart />
        </Route>
        <Route path="/journal">
          <Journal />
        </Route>
        <Sider style={{ backgroundColor: "#534239", color: "#715a4e" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alingItems: "center",
              width: "100%",
            }}
          >
            <Route path="/journal">
              {journallinks.map((link, index) => {
                return (
                  <Button
                    onClick={() => history.push(journalpaths[index])}
                    style={{ margin: "2rem" }}
                  >
                    {link}
                  </Button>
                );
              })}
            </Route>
          </div>
        </Sider>
      </Content>
    </Layout>
  );
}

export default Home;
