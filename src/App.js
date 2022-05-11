import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';

import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
       <Route path="/"element={<Home></Home>}></Route>
       <Route path="/home"element={<Home></Home>}></Route>
       <Route path="/dashboard"element={<Dashboard></Dashboard>}></Route>
       <Route path="/review"element={<Review></Review>}></Route>
       <Route path="/shop"element={<Shop></Shop>}></Route>
       <Route path="/about"element={<About></About>}></Route>
       <Route path="/contact"element={<Contact></Contact>}></Route>
       <Route path="*"element={<NotFound></NotFound>}></Route>
       
     </Routes>
  
    </div>
  );
}

export default App;
