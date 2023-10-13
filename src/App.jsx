import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Videos from "./components/Videos.jsx";
import Footer from "./components/Footer.jsx";
import Upload from "./components/Upload.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
