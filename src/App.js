import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import GreenLightRedLight from "./components/GreenLightRedLight";
import Header from "./components/Header";

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/Green-Light-Red-Light" element={<GreenLightRedLight />} />
      </Routes>
    </div>
  );
}

export default App;
