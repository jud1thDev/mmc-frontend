import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import SearchBookPage from "./pages/SearchPage/SearchBookPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";
import UserCommentPage from "./pages/BookInfoPage/UserCommentPage";
function App() {
  return (
    <Routes>
      <Route path="/selectBook" element={<SelectBookPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/extract-archive-detail" element={<ArchiveDetail />} />
      <Route path="/review-archive-detail" element={<ArchiveDetail />} />
      <Route path="/total-archive-detail" element={<ArchiveDetail />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/myBadge" element={<MyBadgePage />} />
      <Route path="/character/custom" element={<CharacterCustomPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/search/book" element={<SearchBookPage />} />
      <Route path="/info/book" element={<BookInfoPage />} />
      <Route path="/info/book/comment" element={<UserCommentPage />} />
    </Routes>
  );
}

export default App;
