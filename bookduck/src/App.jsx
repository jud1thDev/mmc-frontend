import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import SearchBookPage from "./pages/SearchPage/SearchBookPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/selectBook" element={<SelectBookPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/extract-archive-detail" element={<ArchiveDetail />} />
      <Route path="/review-archive-detail" element={<ArchiveDetail />} />
      <Route path="/total-archive-detail" element={<ArchiveDetail />} />

      <Route path="/myBadge" element={<MyBadgePage />} />
      <Route path="/character/custom" element={<CharacterCustomPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/search/book" element={<SearchBookPage />} />
    </Routes>
  );
}

export default App;
