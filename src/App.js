import logo from './logo.svg';
import './App.css';
import Weather from "./Weather"
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Weather Search
        </p>
        
        
        
  
        <Weather/>
      </header>
    </div>
  );
}

export default App;
