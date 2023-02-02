import './App.css';
import { Taskbar } from './components/Header/Taskbar';
import { Desktop } from './components/Desktop/Desktop';
import { useContext, useRef } from 'react';
import UserPopupContext from './context/UserPopupProvider';
import { UserPopup } from './components/UserPopup/UserPopup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage';
import PcConfigsContext from './context/PcConfigsProvider';
import { useEffect } from 'react';
import { ShutDownPage } from './components/ShutDownPage/ShutdownPage';
import { CommandWindow } from './components/CommandWindow/CommandWindow';

function App() {

  const { isPopupOn, setIsPopupOn } = useContext(UserPopupContext);
  const volume = useContext(PcConfigsContext).volume;

  let clickDown = new Audio("/audios/clickdown.mp3");
  let clickUp = new Audio("/audios/clickup.mp3");

  function handleSystemClick(type){
    switch(type){
      case "up":
        clickUp.volume = volume / 3;
        clickUp.play();
        break;
      case "down":
        clickDown.volume = volume / 3;
        clickDown.play();
        break;
      default:
        break;
    }
  }

  return (
    <div className="App" onMouseDown={()=>handleSystemClick("down")} onMouseUp={()=>handleSystemClick("up")}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            exact
            element={
              <div className="start-page">
                <StartPage />
              </div>
            }
          />
          <Route 
            path="/pc"
            element={
              <div className="pc-page">
                <Taskbar />
                <Desktop />
                {isPopupOn && <UserPopup setIsPopupOn={setIsPopupOn} />}
              </div>
            }
          />
          <Route 
            path="/shuttingdown"
            element={
              <ShutDownPage />
            }
          />
          <Route 
            path="/system"
            element={
              <CommandWindow />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
