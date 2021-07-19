import React, { useState } from "react";
import "./sidebar.css";
import { NavLink} from 'react-router-dom'

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact} = props;
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={props.onClick}>
      <NavLink exact={exact} onclick={onClick} to={to} onClick={() => setExpand(!expand)} className="sidebar-menu-item">
        <div className="sidebar-menu-icon">
          <i class={iconClassName}></i>
        </div> 
        <span>{name}</span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sidebar-sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, i) => (
            <li key={i}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
