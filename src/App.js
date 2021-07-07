import './App.css';
import Header from './Home/Header';
import Sidebar from './Home/Home_Sidebar/Sidebar';
import Main from './Home/Home_Main/Main';

function App() {
  return (
    <div className="App">
      <div className="App_header">
        <Header />
      </div>
      <div className="App_sidebar_main">
          <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default App;
