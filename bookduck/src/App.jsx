import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecordingPage from "./pages/RecordingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecordingPage />} />
    </Routes>
  );
}

export default App;
