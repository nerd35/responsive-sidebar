import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/icons/logo.png";
import ProfilePic from "../../assets/icons/profilep.JPG";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-newspaper",
    subMenus: [
      { name: "Courses", to: `/content/courses` },
      { name: "Videos", to: `/content/videos` },
    ],
  },
  { name: "Design", exact: true, to: `/design`, iconClassName: "bi bi-vector-pen" },
];

const SideBar = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sidebar-sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive]);
  return (
    <div className={`sidebar-container ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Search" />
      </div>
      <div className="divider"></div>
      <div className="sidebar-main-menu">
        <ul>
          {menuItems.map((menuItem, i) => (
            <MenuItem
              key={i}
              to={menuItem.to}
              name={menuItem.name}
              exact={menuItem.exact}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          {/* <li>
            <a className="sidebar-menu-item">
              <div className="sidebar-menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span> Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="sidebar-menu-item">
              <div className="sidebar-menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="avatar">
          <img src={ProfilePic} alt="profilepics" />
        </div>
        <div className="user-info">
          <h5>Umukoro Chinedu</h5>
          <p>mukolochinedu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
