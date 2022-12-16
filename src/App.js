import "./App.scss"
import Header from './Components/Header';
import Main from './Components/Main';
import SideBar from './Components/SideBar';
import { useState } from "react";

function App() {

  const [menu,setMenu] = useState(false);

  return (
    <div className="App">
     {
            menu && <SideBar menu={menu} setMenu={setMenu}/>
      }
      <Header menu={menu} setMenu={setMenu}/>
      <Main/>
    </div>
  );
}

export default App;
