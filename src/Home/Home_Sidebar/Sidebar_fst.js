import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHome, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Sidebar_fst() {
  return (
    <div>
      <div className="sidebar_sub">
        <div className="sidebar_icon_sub">
          <FontAwesomeIcon className="sidebar_icon" icon={faHome} />
        </div>
        <span className="sidebar_text">홈</span>
      </div>
      <div className="sidebar_sub">
        <div className="sidebar_icon_sub">
          <FontAwesomeIcon className="sidebar_icon" icon={faCompass} />
        </div>
        <span className="sidebar_text">탐색</span>
      </div>
      <div className="sidebar_sub">
        <div className="sidebar_icon_sub">
          <FontAwesomeIcon className="sidebar_icon" icon={faYoutube} />
        </div>
        <span className="sidebar_text">구독</span>
      </div>
      <div className="sidebar_sub">
        <div className="sidebar_icon_sub">
          <FontAwesomeIcon className="sidebar_icon" icon={faYoutube} />
        </div>
        <span className="sidebar_text">Originals</span>
      </div>
      <div className="sidebar_sub_last">
        <div className="sidebar_icon_sub">
          <FontAwesomeIcon className="sidebar_icon" icon={faRecordVinyl} />
        </div>
        <span className="sidebar_text">YouTube Music</span>
      </div>
    </div>
  );
}

export default Sidebar_fst