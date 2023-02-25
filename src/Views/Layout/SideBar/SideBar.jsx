import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WeeksData } from "../../../data/WeeksData";
import { Home } from "../../Pages";
import "./SideBar.scss";
import Header from "../Header/Header";

const SideBar = () => {
  const [propData, setPropData] = useState([]);
  const [propName, setPropName] = useState("");
  function getData(e) {
    const id = e.target.id;
    const name = e.target.name;
    const weekData = WeeksData.find(x=>x.collapseId==id);
    setPropData(weekData.data);
    setPropName(name);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <div className="menulist">
              <nav>
                <ul className="menu">
                  {WeeksData &&
                    WeeksData.map((menu, index) => {
                      return (
                        <li key={index}>
                          <button
                            name={menu.name}
                            id={menu.collapseId}
                            className="btn collapse-btn collapsed link menu-item"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${menu.collapseId}`}
                            aria-controls={menu.collapseId}
                            onClick={getData}
                          >
                            {menu.name}
                          </button>
                          <div
                            className="collapse submenu"
                            id={menu.collapseId}
                            aria-expanded="false"
                          >
                            {menu.data &&
                              menu.data.map((sub, subindex) => {
                                return (
                                  <div key={subindex}>
                                    <a href={`#${sub.id}`}>{sub.title}</a>
                                  </div>
                                );
                              })}
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-10 offset-2">
            <Header pageTitle={propName} />
            <div className="my-5">
              <Home data={propData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
