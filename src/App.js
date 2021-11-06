import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from "./components/Register/Register";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar />
//       </header>
//       {/*<Home />*/}
//         <Login/>
//     </div>
//
//   );
// }

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                    <Route exact path="/login" component={Login}>
                    </Route>
                    <Route exact path="/register" component={Register}>
                    </Route>
                    <Route exact path="/home" component={Home}>
                    </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
