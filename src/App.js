import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./component/Home";
import './App.css';
import  "./component/Com.css"
import { User } from "./component/User";
import { Nav } from "./component/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/user" element={<User/>}/>
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
