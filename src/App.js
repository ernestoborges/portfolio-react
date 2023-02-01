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

function App() {

  const { isPopupOn, setIsPopupOn } = useContext(UserPopupContext);
  const volume = useContext(PcConfigsContext).volume;

  let clickDown = new Audio("/audios/clickdown.mp3");
  let clickUp = new Audio("/audios/clickup.mp3");

  useEffect(()=>{
    clickDown.volume = volume / 3;
    clickUp.volume = volume / 3;

  }, [volume])

  return (
    <div className="App" onMouseDown={()=>clickDown.play()} onMouseUp={()=>clickUp.play()}>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
