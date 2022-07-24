import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./newUser.scss";

const NewUser = ({ title, inputs }) => {
  const [file, setFile] = useState("");

  return (
    <div className="newUser">
      <SideBar />
      <Navbar />

      <div className="position__component">
        <div className="newContainer">
          <div className="top__title">
            <h1> {title} </h1>
          </div>

          <div className="content__ajouter">
            <div className="gauche">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>

            <div className="droite">
              <form>
                <div className="formInput">
                  <label htmlFor="file">Image <DriveFolderUploadOutlinedIcon className="icon" /> </label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label> {input.label} </label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}

               
              </form>
              <button> Enregistrer </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
