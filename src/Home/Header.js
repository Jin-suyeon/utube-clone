import React from "react";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMicrophone, faSearch, faTh, faVideo } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <div className="header">
      <div className="header_sub">

        <div className="header_fst">
          <FontAwesomeIcon className="header_bar" icon={faBars} size="1x" />
          {/* <FontAwesomeIcon className="header_utube-icon" icon={faYoutube} size="2x" /> */}
          <img className="header_utube-icon" src="./img/logo.png" alt="" />
        </div>

        <div className="header_sec">
          <div className="header_input">
            <input type="textarea" placeholder="검색" />
          </div>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <FontAwesomeIcon className="header_mike" icon={faMicrophone} />
        </div>

        <div className="header_thd">
          <FontAwesomeIcon className="header_video" icon={faVideo} />
          <FontAwesomeIcon className="header_app" icon={faTh} />
          <FontAwesomeIcon className="header_bell" icon={faBell} />
          <img className="header_user-image" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Header