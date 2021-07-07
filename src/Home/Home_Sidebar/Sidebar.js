import React from 'react';
import './Sidebar.css'
import Sidebar_five from './Sidebar_five';
import Sidebar_four from './Sidebar_four';
import Sidebar_fst from './Sidebar_fst';
import Sidebar_sec from './Sidebar_sec';
import Sidebar_six from './Sidebar_six';
import Sidebar_thd from './Sidebar_thd';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_scroll">
        <Sidebar_fst />
        <Sidebar_sec />
        <Sidebar_thd />
        <Sidebar_four />
        <Sidebar_five />
        <Sidebar_six />
      </div>
    </div>
  );
}

export default Sidebar