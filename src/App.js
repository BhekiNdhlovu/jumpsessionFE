import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      {/*<Home />*/}
        <Login/>
    </div>
  );
}

export default App;
