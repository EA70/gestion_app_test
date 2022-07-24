import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <Navbar />

      <div className="position__component">
        <div className="head">

          <div className="gauche">
            <div className="editButton">Edit</div>
            <h1 className="title">Informations</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Mando Elie</h1>
                <div className="detailItem">
                  <span className="itemKey">Email : </span>
                  <span className="itemValue">mandokoyabanda@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone : </span>
                  <span className="itemValue">+216 26 023 428</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse : </span>
                  <span className="itemValue">
                    10 Rue Auguste Compte, Tunis
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pays : </span>
                  <span className="itemValue"> Tunisia </span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="droite">
            < Chart title = "Transactions en terme de 6 derniers mois" aspect = { 3 / 1} />
          </div>
        </div>

        <div className="bas">
          <h1 className="title">
              Dernières Opérations
          </h1>
          < List />
      </div>

      </div>

    </div>
  );
};

export default Single;
