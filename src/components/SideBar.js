import React from 'react';
import image from '../assets/images/Logo-Rikolinos.png';
import ContentWrapper from './ContentWrapper';
import Categories from './Categories';
import LastProduct from './LastProduct';
import ProductTables from './ProductTables';
import UserTables from './UserTables';
import { Routes, Route, Link } from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" exact>
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Rikolinos"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/" exact>
                        <span className="dashboard">Dashboard - Los Rikolinos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Categorias -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/categories" exact>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categories</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Último producto -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/last-product" exact>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last product</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tabla de productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/product-tables" exact>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Product tables</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tabla de usuarios -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/user-tables" exact>
                        <i className="fas fa-fw fa-table"></i>
                        <span>User tables</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                <Route exact path="/categories" element={<Categories />} />
                <Route exact path="/last-product" element={<LastProduct />} />
                <Route exact path="/product-tables" element={<ProductTables />} />
                <Route exact path="/user-tables" element={<UserTables />} />
                
                {/* <Route component={NotFound} /> */}
            </Routes>

        </React.Fragment>
    )
}
export default SideBar;