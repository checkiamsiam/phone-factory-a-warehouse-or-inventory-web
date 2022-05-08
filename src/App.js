import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Items from './components/Items/Items';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import ProductsGallery from './components/ProductsGallery/ProductsGallery';
import WhyChoseUs from './components/WhyChoseUs/WhyChoseUs';
import { useEffect } from 'react';
import DetailsOfProduct from './components/DetailsOfProduct/DetailsOfProduct';
import ScrollToTop from "react-scroll-to-top";
import { BiArrowToTop } from 'react-icons/bi';
import RequireAuth from './components/Shared/RequireAuth';
import AddItem from './components/AddItem/AddItem';
import MyAdded from './components/MyAdded/MyAdded';
import Edit from './components/Edit/Edit';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: 'ease',
    })
  })
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={[<Banner key="1"></Banner>, <Items key="2"></Items>, <ProductsGallery key="3"></ProductsGallery>, <WhyChoseUs key="4"></WhyChoseUs>]}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }
        ></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <DetailsOfProduct></DetailsOfProduct>
          </RequireAuth>
        }
        ></Route>
        <Route path='/inventory/add' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }
        ></Route>
        <Route path='inventory/edit/:id' element={
          <RequireAuth>
            <Edit></Edit>
          </RequireAuth>
        }
        ></Route>
        <Route path='/inventory/my-added' element={
          <RequireAuth>
            <MyAdded />
          </RequireAuth>
        }
        ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
      <ScrollToTop smooth component={<BiArrowToTop />} style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }} />
    </div>
  );
}

export default App;
