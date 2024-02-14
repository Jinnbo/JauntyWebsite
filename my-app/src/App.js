import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link
} from "react-router-dom"
import BuyEquipmentPage from "./Pages/BuyEquipmentPage/BuyEquipmentPage.jsx";
import Contactpage from "./Pages/ContactPage/ContactPage.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import MaterialsPage from "./Pages/MaterialsPage/MaterialsPage.jsx";
import RepairEquipmentPage from "./Pages/RepairEquipmentPage/RepairEquipmentPage.jsx";
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
  <>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="buyequipment" element={<BuyEquipmentPage/>}/>
        <Route path="contact" element={<Contactpage/>}/>
        <Route path="materials" element={<MaterialsPage/>}/>
        <Route path="repairequipment" element={<RepairEquipmentPage/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
