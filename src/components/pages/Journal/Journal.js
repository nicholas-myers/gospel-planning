import React, { useState } from "react";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";

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
      <Button>Testimony</Button>
      <article>Testimony goes here.</article>
      <Button onClick={openModel}>Create New Entry</Button>
      <Modal
        style={{ backgroundColor: "white" }}
        visible={isVisible}
        onCancel={closeModal}
      ></Modal>
      <article>
        A journal Entry goes here. A journal entry has a title, a date, body
        content.
      </article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
      <article>A journal Entry goes here.</article>
    </section>
  );
}

export default Journal;
