import { faFilm, faGamepad, faLightbulb, faTrophy, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css'

function Sidebar_four() {
  return (
    <div>
      <div className="sidebar_line">
        <div className="sidebar_header">YOUTUBE 더보기</div>
        <div className="sidebar_sub_fst">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faFilm} />
          </div>
          <span className="sidebar_text">영화</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faGamepad} />
          </div>
          <span className="sidebar_text">게임</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faWifi} />
          </div>
          <span className="sidebar_text">실시간</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faLightbulb} />
          </div>
          <span className="sidebar_text">학습</span>
        </div>
        <div className="sidebar_sub_last">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faTrophy} />
          </div>
          <span className="sidebar_text">스포츠</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_four