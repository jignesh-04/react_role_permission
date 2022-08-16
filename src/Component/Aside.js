import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import PostService from '../Services/PostService';
import { FaUserGraduate, FaUserFriends, FaCriticalRole, FaUserAltSlash, FaSignOutAlt } from 'react-icons/fa';


const Aside = (props) => {
    const navigate = useNavigate();

    //logout 
    const logout = () => {
        // PostService.logout_API()
        //     .then((res) => {
        //         // window.location.reload();
        //     })
        localStorage.clear();
        navigate("/");
    }

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="" className="brand-link">
                <img src="/aset/images/Logo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/aset/images/dp.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">UserName</a>
                    </div>
                </div>

                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            {(props.perms.includes("view student")) &&
                                <span role="button" className="nav-link" onClick={() => { navigate('/student') }}>
                                    <FaUserGraduate /> <p className='ml-3'> Students</p>
                                </span>
                            }
                        </li>
                        <li className="nav-item">
                            {(props.perms.includes("view user")) &&
                                <span role="button" className="nav-link" onClick={() => { navigate('/users') }}>
                                    <FaUserFriends /> <p className='ml-3'>Users</p>
                                </span>
                            }
                        </li>
                        <li className="nav-item">
                            {(props.perms.includes("view role")) &&
                                <span role="button" className="nav-link" onClick={() => { navigate('/role') }}>
                                    <FaCriticalRole /> <p className='ml-3'>Role</p>
                                </span>
                            }
                        </li>
                        <li className="nav-item">
                            {(props.perms.includes("view permission")) &&
                                <span role="button" className="nav-link" onClick={() => { navigate('/permision') }}>
                                    <FaUserAltSlash /><p className='ml-3'>Permision</p>
                                </span>
                            }
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={logout}>
                                <FaSignOutAlt /> <p className='ml-3'>Log Out</p></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Aside;