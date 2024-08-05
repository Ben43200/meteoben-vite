// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './Home.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )






import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import Home from "./pages/home/Home.jsx";
// import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
// import './css/main.scss'
// import "./css/mixinsandfunctions.scss";
// import Micronutrition from "./pages/micronutrinition/Micronutrition.jsx";
// import Blog from "./pages/blog/Blog.jsx";
// import BlogItem from "./pages/blogitem/BlogItem.jsx";
// import Error from "./pages/error/Error.jsx";
// import Contact from "./pages/contact/Contact.jsx";
// import Puzzle from "./pages/puzzle/Puzzle.jsx";
import Prestations from "./pages/prestations/Prestations.jsx";
// import MentionsLegales from "./pages/mentions/MentionsLegales.jsx";
// import ScrollToTop from "./components/scrolltotop/ScrollToTop.jsx";
import Navbar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/Home.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// // Trigger the event manually once at the start to set the initial value
// window.dispatchEvent(new Event('resize'));

root.render(

  <BrowserRouter>
{/* <ScrollToTop />  */}
    <Navbar />

    <Routes>

      <Route path="/" element={<Home />} />
      {/* <Route path="/micronutrition" element={<Micronutrition />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/blogitem/:id" element={<BlogItem />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/puzzle" element={<Puzzle />} />*/}
      <Route path="/prestations" element={<Prestations />} />
       {/*<Route path="/mentions-legales" element={<MentionsLegales />} /> 
      <Route path="*" element={<Error />} /> */}




      {/* <Route path="*" element={<Error />} />  */}






  

    </Routes>
    <Footer />

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);







