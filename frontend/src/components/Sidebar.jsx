import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoTimeSharp, IoSettings, IoRestaurant, IoBarChart} from "react-icons/io5"
import {useDispatch, useSelector} from "react-redux"
import {LogOut, reset} from "../features/authSlice"

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = ()=> {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }

  return (
    <div><aside className="menu pl-2 has-shadow">
    <p className="menu-label">
      General
    </p>
    <ul className="menu-list">
      <li>
        <NavLink to={"/dashboard"}><IoHome/>Dashboard</NavLink>
      </li>
    </ul>
    {user && user.role === "admin" &&(
      <div>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}><IoPerson/>Users</NavLink>
          </li>  
          <li>
            <NavLink to={"/products"}><IoRestaurant/>Kelola Penjualan</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}><IoBarChart/>Laporan Penjualan</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}><IoTimeSharp/>History Penjualan</NavLink>
          </li>
        </ul>
      </div>
    )}
    {user && user.role === "user" &&(
      <div>
        <p className="menu-label">Kasir</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/penjualan"}><IoPerson/>Penjualan</NavLink>
          </li>  
          <li>
            <NavLink to={"/transaksi"}><IoPerson/>Transaksi</NavLink>
          </li> 
          <li>
            <NavLink to={"/products"}><IoPricetag/>Saldo</NavLink>
          </li>
        </ul>
      </div>
    )}
    {user && user.role === "owner" &&(
      <div>
        <p className="menu-label">Owner</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/products"}><IoPerson/>Laporan Penjualan</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}><IoPerson/>History Penjualan</NavLink>
          </li>  
        </ul>
      </div>
    )}

    <p className="menu-label">
      <IoSettings/>Settings
    </p>
    <ul className="menu-list">
      <li>
        <button onClick={logout}
        className="button is-dark">
          <IoLogOut/>Logout
        </button>
        </li>
    </ul>
  </aside></div>
  )
}

export default Sidebar;