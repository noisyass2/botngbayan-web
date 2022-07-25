import logo from './logo.svg';
import './App.css';
import { Landing } from "./components/landing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Landing />
        
      </header>
    </div>
  );
}

export default App;
