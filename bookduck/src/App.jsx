import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import SearchMainPage from "./pages/SearchPage/SearchMainPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import SearchDetailPage from "./pages/SearchPage/SearchDetailPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import MyBadgePage from "./pages/CharacterPage/MyBadgePage";
import CharacterCustomPage from "./pages/CharacterPage/CharacterCustomPage";
import SelectBookPage from "./pages/RecordingPage/SelectBookPage";
import ArchivePage from "./pages/RecordingPage/ArchivePage";
import ArchiveDetail from "./pages/RecordingPage/ArchiveDetailPage";
import RecordingPage from "./pages/RecordingPage/RecordingPage";
import MainPage from "./pages/MainPage/MainPage";
import RegisterPage from "./pages/SearchPage/SearchRegisterPage";
import SelectCardPage from "./pages/MainPage/SelectCardPage";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";
import UserCommentPage from "./pages/BookInfoPage/UserCommentPage";
import BookInfoAddedPage from "./pages/BookInfoPage/BoonInfoAddedPage";

import CardDecorationPage from "./pages/RecordingPage/CardDecorationPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";

import EnterBookCasePage from "./pages/LibraryPage/EnterBookCasePage";

import SelectExtractPage from "./pages/MainPage/SelectExtractPage";
import SelectReviewPage from "./pages/MainPage/SelectReviewPage";
import SelectCustomPage from "./pages/MainPage/SelectCustomPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import FriendListPage from "./pages/FriendPage/FriendListPage";
import OAuthRedierctPage from "./pages/LoginPage/OAuthRedierctPage";

function App() {
  return (
    <Routes>
      <Route path="/selectBook" element={<SelectBookPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/extract-archive-detail" element={<ArchiveDetail />} />
      <Route path="/review-archive-detail" element={<ArchiveDetail />} />
      <Route path="/total-archive-detail" element={<ArchiveDetail />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/recording/decoration" element={<CardDecorationPage />} />

      <Route path="/library" element={<LibraryPage />} />
      <Route path="/library/bookcase/:id" element={<EnterBookCasePage />} />

      <Route path="/myBadge" element={<MyBadgePage />} />
      <Route path="/character/custom" element={<CharacterCustomPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/api/oauth" element={<OAuthRedierctPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/friend" element={<FriendListPage />} />
      <Route path="/search" element={<SearchMainPage />} />
      <Route path="/search/detail" element={<SearchDetailPage />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/search/register" element={<RegisterPage />} />
      <Route path="/info/book" element={<BookInfoPage />} />
      <Route path="/info/book/user" element={<BookInfoAddedPage />} />
      <Route path="/info/book/comment" element={<UserCommentPage />} />
      <Route path="/selectcard" element={<SelectCardPage />} />
      <Route path="/selectcard/extract" element={<SelectExtractPage />} />
      <Route path="/selectcard/review" element={<SelectReviewPage />} />
      <Route path="/selectcard/custom" element={<SelectCustomPage />} />
    </Routes>
  );
}

export default App;
