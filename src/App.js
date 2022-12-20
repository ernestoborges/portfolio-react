import './App.css';
import { Taskbar } from './components/Header/Taskbar';
import { Desktop } from './components/Desktop/Desktop';

function App() {
  return (
    <div className="App">
      <Taskbar />
      <Desktop />
    </div>
  );
}

export default App;
