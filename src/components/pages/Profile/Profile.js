import React from "react";
import { Button } from "antd";

function Profile() {
  return (
    <section>
      <h2>Profile</h2>
      <p>email</p>
      <Button>Edit</Button>
      <p>Cell Number</p>
      <Button>Change Cell</Button>
      <Button>Change Password</Button>
      <Button>Change Color Theme</Button>
      <Button>Family Organizations</Button>
    </section>
  );
}

export default Profile;
