import React, { useState } from "react";
import Journal from "../Journal/Journal";
import { Route, useHistory, useLocation } from "react-router-dom";
import { Button, Layout } from "antd";
import LandingPage from "./LandingPage";
import FamilyChart from "../FamilyChart/FamilyChart";
import FamilyPlanning from "../FamilyPlanning/FamilyPlanning";
import HomeEvening from "../HomeEvening/HomeEvening";

const { Header, Content } = Layout;

function Home() {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);

  const goHome = () => {
    history.push("/");
  };

  const goJournal = () => {
    history.push("/journal");
  };

  const goChart = () => {
    history.push("/familychart");
  };

  const goPlanning = () => {
    history.push("/familyplanning");
  };

  const goHomeEvening = () => {
    history.push("/home-evening");
  };

  const [profile, setProfile] = useState(false);

  const login = () => {
    setProfile(true);
  };

  const logout = () => {
    setProfile(false);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        {location.pathname == "/" ? (
          <h1>Family Spirit</h1>
        ) : (
          <h1>Myers Family</h1>
        )}
        <nav>
          <Button onClick={goHome}>Home</Button>
          <Button onClick={goJournal}>Journal</Button>
          <Button onClick={goChart}>Chart</Button>
          <Button onClick={goPlanning}>Planning</Button>
          <Button onClick={goHomeEvening}>Home Evening</Button>
          {profile == false ? (
            <Button onClick={login}>Login</Button>
          ) : (
            <Button>Profile</Button>
          )}
          {profile && <Button onClick={logout}>Logout</Button>}
        </nav>
      </Header>
      <Content style={{padding: '2rem'}}>
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
      </Content>
    </Layout>
  );
}

export default Home;
