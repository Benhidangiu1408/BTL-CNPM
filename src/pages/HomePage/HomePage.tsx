import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to="/user">Users</Link>
      {/* <a href="/users">Users</a> */}
    </>
  );
};

export default HomePage;