import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={[<Banner></Banner>]}></Route>
        <Route path='/' element={[<Banner></Banner>]}></Route>
        <Route path='/' element={[<Banner></Banner>]}></Route>
        <Route path='/' element={[<Banner></Banner>]}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
