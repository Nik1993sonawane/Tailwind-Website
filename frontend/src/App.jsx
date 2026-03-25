import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Subject from "./components/Subject";
import SearchBox from "./components/SearchBox";
import Experience from "./components/Experience";
import Platform from "./components/Platform";
import Learners from "./components/Learners";
import Symbol from "./components/Symbol";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Transform from "./pages/Transform";
import AiBuilder from "./pages/AiBuilder";
import SearchHelp from "./pages/SearchHelp";
import { Search } from "lucide-react";

// 🔷 Home Page
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Subject />
        <SearchBox />
        <Experience />
        <Platform />
        <Learners />
        <Symbol />
        <Footer />
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-[#000] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transform" element={<Transform />} />
          <Route path="/aibuilder" element={<AiBuilder />} />
          <Route path="/searchhelp" element={<SearchHelp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;