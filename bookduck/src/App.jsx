import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import SearchMainPage from "./pages/SearchPage/SearchMainPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import SearchBookPage from "./pages/SearchPage/SearchBookPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";
import SearchArchivePage from "./pages/SearchPage/SearchArchivePage";
import SearchUserPage from "./pages/SearchPage/SearchUserPage";
import RegisterPage from "./pages/SearchPage/RegisterPage";

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
      <Route path="/search/main" element={<SearchMainPage />} />
      <Route path="/search/archive" element={<SearchArchivePage />} />
      <Route path="/search/user" element={<SearchUserPage />} />
      <Route path="/search/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
