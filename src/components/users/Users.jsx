import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./users.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows , userColumns} from "../../dataUser";

const Users = () => {

    const [data, setData] = useState(userRows);


    const  actionColonne  = [ 
      {
        field:"Action",
        headerName:"Action",
        width:200,

        renderCell:(params) => {
          return(
            <div className="cellAction">
              <Link to="/users/1" style={{ textDecoration:"none" }} >
                  <div className="voir">Voir</div>
              </Link>

              <div className="delete">
                Supprimer
              </div>
            </div>
          )
        }
      }
    ] ;

  return (
    <div className="users">
      <div className="usersTitle">
        Ajouter Nouveau Utilisateur
        <Link to="/users/new">Ajouter utilisateur</Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColonne)}
        pageSize={10}
        checkboxSelection
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default Users;
