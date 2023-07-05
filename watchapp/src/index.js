import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import ThankYou from './component/ThankYou';
// import ContactForm from './component/ContactForm';
// import Categories from './component/Categories';
// import FeedBack from './component/FeedBack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <FeedBack/> */}
    {/* <Categories/> */}
    {/* <ContactForm/> */}
    {/* <ThankYou/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
