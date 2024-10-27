import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import CharacterPage from "./pages/CharacterPage/CharacterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character" element={<CharacterPage />} />
    </Routes>
  );
}

export default App;
