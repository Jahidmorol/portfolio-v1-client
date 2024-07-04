import "./App.css";
import About from "./Components/About";
import Contacte from "./Components/Contacte";
import Exprience from "./Components/Exprience";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Protfolio from "./Components/Protfolio";
import SocialLink from "./Components/SocialLink";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./Components/ProjectDetails";
import Services from "./Components/Services";
import BlogDetails from "./Components/BlogDetails";
import Main from "./Layout/Main";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main#home" element={<Hero />} />
          <Route path="/main#portfolio" element={<Protfolio />} />
          <Route path="/main#resume" element={<Exprience />} />
          <Route path="/main#services" element={<Services />} />
          <Route path="/main#contact" element={<Contacte />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
        <SocialLink />
      </BrowserRouter>
    </>
  );
}

export default App;
