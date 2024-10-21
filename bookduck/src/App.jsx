import { Routes, Route } from "react-router-dom";
import SettingPage from "./pages/Setting/SettingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SettingPage />} />
    </Routes>
  );
}

export default App;
