import './App.css';
import { Taskbar } from './components/Header/Taskbar';
import { Desktop } from './components/Desktop/Desktop';
import { useContext } from 'react';
import UserPopupContext from './context/UserPopupProvider';
import { UserPopup } from './components/UserPopup/UserPopup';

function App() {

  const {isPopupOn, setIsPopupOn} = useContext(UserPopupContext);

  return (
    <div className="App">
      <Taskbar />
      <Desktop />
      {isPopupOn && <UserPopup setIsPopupOn={setIsPopupOn} />}
    </div>
  );
}

export default App;
