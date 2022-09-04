import { Route, Routes } from "react-router-dom";
import StickyWhatsapp from "./Components/StickyWhatsapp";
import Home from "./Pages/Home/Home";

function App() {
  return (<>    
    <Routes>
      <Route path="/" element={<Home></Home>} />
    </Routes>
    <footer className="h-44">
        
    </footer>
    <StickyWhatsapp></StickyWhatsapp>   
 </>);
}

export default App;
