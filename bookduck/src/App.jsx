import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookListView from "./components/common/BookListView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookListView />} />
    </Routes>
  );
}

export default App;
