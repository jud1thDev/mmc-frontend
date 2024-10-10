import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header1 from "./components/common/Header1";
import Header2 from "./components/common/Header2";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header2 />} />
    </Routes>
  );
}

export default App;
