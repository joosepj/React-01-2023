import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops";
import { ContactUs } from "./pages/ContactUs";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import MaintainCategories from "./pages/admin/MaintainCategories";
import NotFound from './pages/NotFound';
import NavigationBar from './components/NavigationBar';
import { useContext } from "react";
import AuthContext from "./store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />

      {/* Navigationbar */}

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs/> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        {authCtx.isLoggedIn === true && <>
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories/> } />
        <Route path="*" element={ <NotFound/> } />
        </>}
        {/* <Route path="*" element={ <Navigate to "/" /> } /> */}
      </Routes>

      {/* FOOTER */}
    </div>
  );
}

export default App;
