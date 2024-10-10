import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TextField from "./components/common/TextField";
function App() {
  return (
    <Routes>
      <Route path="/" element={<TextField type="내용" title="제목" />} />
    </Routes>
  );
}

export default App;
