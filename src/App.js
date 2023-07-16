import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import Navigation from './navigation';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
