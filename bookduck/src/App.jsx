import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import SearchMainPage from "./pages/SearchPage/SearchMainPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import SearchDetailPage from "./pages/SearchPage/SearchDetailPage";
import SearchBookPage from "./pages/SearchPage/SearchBookPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";
import RecordingPage from "./pages/RecordingPage/RecordingPage";
import MainPage from "./pages/MainPage/MainPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import RegisterPage from "./pages/SearchPage/SearchRegisterPage";
import SearchArchivePage from "./pages/SearchPage/SearchArchivePage";

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
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/myBadge" element={<MyBadgePage />} />
      <Route path="/character/custom" element={<CharacterCustomPage />} />
      <Route path="/character" element={<CharacterPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/notification" element={<NotificationPage />} />

      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchMainPage />} />
      <Route path="/search/detail" element={<SearchDetailPage />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/search/register" element={<RegisterPage />} />
      <Route path="/search/book" element={<SearchArchivePage />} />
      <Route path="/search/book" element={<SearchBookPage />} />
      <Route path="/info/book" element={<BookInfoPage />} />
      <Route path="/info/book/comment" element={<UserCommentPage />} />
    </Routes>
  );
}

export default App;
