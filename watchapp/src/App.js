// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import NavBar from './component/NavBar';
// import CarouselImg from './component/CarouselImg';
import Gallary from './component/Gallary';
import FooterPage from './component/FooterPage';
import DashBoard from './crud/DashBoard';
import ProductAdd from './crud/ProductAdd';
import ProductCard from './component/ProductCard';
import FeedBack from './component/FeedBack';
import Categories from './component/Categories';
import DigiProduct from './component/DigiProduct';
import Women from './component/Women';
import ContactForm from './component/ContactForm';
import Hompage from './component/Hompage';
import AboutUs from './component/AboutUs';
import Service from './component/Service';
import ThankYou from './component/ThankYou';
import OrderDetails from './component/OrderDetails';
import Registration from './component/Registration';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import ForgotPassword from './component/ForgotPassword';
// import Logout from './component/Logout';

import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Card className='bgCard'>
     
        <Card.Body className='bgBody'>
        
         {/* <CarouselImg/> */}
          {/* <ProductCard/> */}
          <Routes>
            <Route>
            {/* <Route path='caro' element={<CarouselImg/>}/> */}
            <Route path='gallary' element={<PrivateRoute><Gallary/></PrivateRoute> } />
            <Route path='dash' element={<PrivateRoute><DashBoard/></PrivateRoute>}/>
            <Route path='add' element={<PrivateRoute><ProductAdd/></PrivateRoute>}/>
            <Route path='prod' element={<PrivateRoute><ProductCard/></PrivateRoute>}/>
            <Route path='feedback' element={<PrivateRoute><FeedBack/></PrivateRoute>}/>
            <Route path='cat' element={<PrivateRoute><Categories/></PrivateRoute>}/>
            <Route path='digi' element={<PrivateRoute><DigiProduct/></PrivateRoute>}/>
            <Route path='women' element={<PrivateRoute><Women/></PrivateRoute>}/>
            <Route path='CntForm' element={<PrivateRoute><ContactForm/></PrivateRoute>}/>
            <Route path='home' element={<PrivateRoute><Hompage/></PrivateRoute>}/>
            <Route path='about' element={<PrivateRoute><AboutUs/></PrivateRoute>}/>
            <Route path='service' element={<PrivateRoute><Service/></PrivateRoute>}/>
            <Route path='order' element={<PrivateRoute><ThankYou/></PrivateRoute>}/>
            <Route path='details' element={<PrivateRoute><OrderDetails/></PrivateRoute>}/>
        
            </Route>
            <Route path='reg' element={<Registration/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='reset' element={<ForgotPassword/>}/>
            {/* <Route path='logout' element={<Logout/>}/> */}
          </Routes>
          <FooterPage/>
        </Card.Body>
        
      </Card>

      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
