import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";
import FilmDetails from "./components/FilmDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <HeroSection />
        <Routes>
          <Route path="/tv-shows" element={<Gallery />} />
          <Route path="/FilmDetails/:movieId" element={<FilmDetails />} />


          {/* <Profile/> */}
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;