import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TextField from "./components/common/TextField";
import { useState } from "react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
