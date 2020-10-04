import React, { useState } from "react";
import { Modal } from "@material-ui/core";

function Journal() {
  const [isVisible, setIsVisible] = useState(false);

  const openModel = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <section>
      <h2>Journal</h2>
      <button onClick={openModel}>Create New Entry</button>
      <Modal style={{ backgroundColor: "white" }} open={isVisible}>
        <div style={{ width: "50%", height: "50%" }}>
          Form goes here. <button onClick={closeModal}>close</button>
        </div>
      </Modal>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
    </section>
  );
}

export default Journal;
