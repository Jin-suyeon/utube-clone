import React from 'react';
import dummyData from './dummyData';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <div className='main_container'>
      <div className="main_scroll">
        <div className="main_container_sub">
          {dummyData.map((el) => {
            return (
              <div className="main">
                <img className="main_mainImg" src={el.mainImg} alt="" />
                <div className="main_text">
                  <div className="main_text_fst">
                    <img src={el.subImg} alt="" />
                  </div>
                  <div className="main_text_sec">
                    <span className="main_mainText">{el.mainText}</span>
                    <div>
                      <span className="main_subText">{el.name}</span>
                      <FontAwesomeIcon className="main_subText" icon={faCheckCircle} />
                    </div>
                    <div className="main_text_thd">
                      <span className="main_subText">{el.views}</span>
                      <span className="main_subText">•</span>
                      <span className="main_subText">{el.load}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Main