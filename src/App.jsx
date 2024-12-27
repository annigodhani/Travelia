import "./App.css";
import About from "./Components/About/About";
import Destination from "./Components/Destinations/Destination";
import CallToAction from "./Components/Footer/CallToAction";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Memories from "./Components/Memories/Memories";
import Nav from "./Components/Nav/Nav";
import Searches from "./Components/Searches/Searches";
import Testimonial from "./Components/Testimonial/Testimonial";
import Trips from "./Components/Trips/Trips";
// import BookNow from "./Components/Book/BookNow";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Trips from "./Components/Trips/Trips";


function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <Header />
        <Memories />
      </div>
      <Trips />
      <Searches />

      <div className="main">
        <About/>
      </div>
      <Testimonial/>
      <Destination/>
      <div className="main">
      <CallToAction/>
      </div>
      <Footer/>

      {/* <Router>
      <Routes>
        <Route path="/trips" element={<Trips />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
