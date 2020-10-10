import React, { useState } from "react";
import Entries from "./Entries"
import { Button, Modal, Layout } from "antd";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";

const { Sider } = Layout;

function Journal() {
  const [isVisible, setIsVisible] = useState(false);

  const openModel = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className="journal">
      <Route path="/journal/entries">
        <Entries />
      </Route>
      <Route path="/journal/testimony">
        <h2>Testimony</h2>
      </Route>
      <Route path="/journal/impressions">
        <h2>Impressions</h2>
      </Route>

      <Route path="/journal/sunday">
        <h2>Sunday</h2>
      </Route>
      <Route path="/journal/generalconference">
        <h2>General Conference</h2>
      </Route>
      <Route path="/journal/talks">
        <h2>Talks</h2>
      </Route>
    </div>
  );
}

export default Journal;
