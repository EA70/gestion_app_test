import React from 'react';
import { Link } from 'react-router-dom';
import './side.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupIcon from '@mui/icons-material/Group';
import FactoryIcon from '@mui/icons-material/Factory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
    return (
        <div className='sidebar' >
            <div className="sidebar__contenu">

                <div className="top">
                    <Link to="/">
                        <span> Gestion Stock </span>
                    </Link>
                </div>
                <hr />

                <div className="center">
                    <ul>
                        <p className="center__title">ACCUEIL</p>
                        <Link to="/"> 
                            <li>
                                < DashboardIcon />
                                <span> Tableau de Bord </span>
                            </li>
                        </Link>

                        <p className="center__title">UTILITAIRES</p>
                        <Link to="/"> 
                            <li>
                                < ProductionQuantityLimitsIcon />
                                <span> Produits </span>
                            </li>
                        </Link>
                        <Link to="/users"> 
                            <li>
                                < GroupIcon />
                                <span> Utilisateurs </span>
                            </li>
                        </Link>
                        <Link to="/"> 
                            <li>
                                < FactoryIcon />
                                <span> Facturations </span>
                            </li>
                        </Link>
                        <Link to="/"> 
                            <li>
                                < LocalShippingIcon />
                                <span> Livraisons </span>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="bas">
                    <ul>
                        <p className="center__title">ADMIN</p>
                        <Link to="/"> 
                            <li>
                                < AccountCircleIcon />
                                <span> Profil </span>
                            </li>
                        </Link>
                        <Link to="/"> 
                            <li>
                                < LogoutIcon />
                                <span> Deconnexion </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;