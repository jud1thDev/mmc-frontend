import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/myBadge" element={<MyBadgePage />} />
    </Routes>
  );
}

export default App;
