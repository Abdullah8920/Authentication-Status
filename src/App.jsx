import { Routes, Route, BrowserRouter } from "react-router";
import Navbar from "./components/Navbar"

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/contact";
import UserList from "./Pages/Users";
import UserDetail from "./Pages/userdetail";
import Errorpage from "./Pages/404page";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import ProtectdRoutesCom from "./protectes-routes/protected-routes";
import { publicRoutesData, privateRoutesData } from "./auth/all-routes";


function App() {
  return (
    <BrowserRouter>
      {/* Pubilc Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />


        {/* Private Routes */}
        <Route element={<ProtectdRoutesCom />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
>>>>>>> 50d0f7e49093a6e3cc7392672ee8e85061ec4a00
