import { faCog, faExclamationCircle, faFlag, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css'

function Sidebar_five(){
  return(
    <div>
      <div className="sidebar_line">
        <div className="sidebar_sub_fst">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faCog} />
          </div>
          <span className="sidebar_text">설정</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faFlag} />
          </div>
          <span className="sidebar_text">신고 기록</span>
        </div>
        <div className="sidebar_sub">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faQuestionCircle} />
          </div>
          <span className="sidebar_text">고객센터</span>
        </div>
        <div className="sidebar_sub_last">
          <div className="sidebar_icon_sub">
            <FontAwesomeIcon className="sidebar_icon" icon={faExclamationCircle} />
          </div>
          <span className="sidebar_text">의견 보내기</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_five