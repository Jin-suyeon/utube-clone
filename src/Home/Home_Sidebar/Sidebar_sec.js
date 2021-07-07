import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faBars, faClock, faHistory, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

function Sidebar_sec() {
  return (
    <div>
      <div className="sidebar_line">
        <div className="sidebar_sub_fst">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faArchive} />
          </div>
          <span className="sidebar_text">보관함</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faHistory} />
          </div>
          <span className="sidebar_text">시청기록</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faPlayCircle} />
          </div>
          <span className="sidebar_text">내 동영상</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faClock} />
          </div>
          <span className="sidebar_text">나중에 볼 동영상</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faThumbsUp} />
          </div>
          <span className="sidebar_text">좋아요 표시한 동영상</span>
        </div>
        <div className="sidebar_sub_last">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faBars} />
          </div>
          <span className="sidebar_text">😀</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_sec