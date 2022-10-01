import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import StickyWhatsapp from "./Components/StickyWhatsapp";
import Home from "./Pages/Home/Home";
import CalendarPageConnector from './Pages/Calendar/CalendarConnector';
import Constants from "./Constants";
import UploadImageConnector from './Components/UploadImage/UploadImageConnector';
import AdminConnector from "./Pages/Admin/AdminConnector";
import { Toast } from 'monday-ui-react-core';
import ContactConnector from "./Pages/Contact/ContactConnector";

function App({
  failed,
  successful,
  message,
  InitErrorSuccessAction
}) {
  const [show_contact, setShowContact] = useState(true);

  const close_toast = useCallback(() => {
		InitErrorSuccessAction();
	}, [InitErrorSuccessAction]);

  return (<>   
    <header>
      <NavBar
      routes={Constants.routes}></NavBar>  
    </header> 
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/calendar" element={<CalendarPageConnector></CalendarPageConnector>} />
      <Route path="/admin" element={<AdminConnector></AdminConnector>}>
        <Route path="upload" element={<UploadImageConnector></UploadImageConnector>}/>
        <Route path="calendar" element={<CalendarPageConnector></CalendarPageConnector>}/>
      </Route>
      <Route path="/contact" element={<ContactConnector></ContactConnector>} />
    </Routes>
    <footer className=" bg-orange-500">
        <Footer></Footer>
    </footer>
    <StickyWhatsapp></StickyWhatsapp>  
    <Toast 
    open={successful} 
    type={Toast.types.POSITIVE} 
    autoHideDuration={3000} 
    onClose={close_toast}
    style={{"z-index": 999}}>{message}</Toast> 
    <Toast 
    open={failed} 
    type={Toast.types.NEGATIVE} 
    autoHideDuration={3000}
    onClose={close_toast}
    style={{"z-index": 999}}>{message}</Toast> 
 </>);
}

export default App;
