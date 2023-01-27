import './App.css';
import { Taskbar } from './components/Header/Taskbar';
import { Desktop } from './components/Desktop/Desktop';
import { useContext } from 'react';
import UserPopupContext from './context/UserPopupProvider';
import { UserPopup } from './components/UserPopup/UserPopup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage';

function App() {

  const { isPopupOn, setIsPopupOn } = useContext(UserPopupContext);
  return (
    <div className="App">
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
