import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import Users from "../../components/users/Users";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <Users />
      </div>
    </div>
  );
};

export default List;
