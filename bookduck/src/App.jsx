import { Routes, Route, Navigate } from "react-router-dom";
import { requestFcmToken } from "./api/fcm";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { messaging } from "./api/firebase";
import { onMessage } from "firebase/messaging";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import SearchMainPage from "./pages/SearchPage/SearchMainPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
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
import BookInfoAddedPage from "./pages/BookInfoPage/BookInfoAddedPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import CharacterExportPage from "./pages/StatisticsPage/CharacterExportPage";
import SummaryExportPage from "./pages/StatisticsPage/SummaryExportPage";
import CardDecorationPage from "./pages/RecordingPage/CardDecorationPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import EnterBookCasePage from "./pages/LibraryPage/EnterBookCasePage";
import SelectExtractPage from "./pages/MainPage/SelectExtractPage";
import SelectReviewPage from "./pages/MainPage/SelectReviewPage";
import SelectCustomPage from "./pages/MainPage/SelectCustomPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import FriendListPage from "./pages/FriendPage/FriendListPage";
import OAuthRedierctPage from "./pages/LoginPage/OAuthRedierctPage";
import OtherMainPage from "./pages/OtherUserPage/OtherMainPage";
import handleFcmToken from "./components/NotificationPage/handleFcmToken";
import { getUserId } from "./api/oauth";

function App() {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleError = (event) => {
      console.error("Error 발생:", event.message);
      setHasError(true);
    };

    window.addEventListener("error", handleError);

    checkAuthentication();
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    if (hasError) {
      navigate("/login", { replace: true });
    }
  }, [hasError, navigate]);

  useEffect(() => {
    const fetchandSendFCM = async () => {
      try {
        const id = await getUserId();
        const accessToken = localStorage.getItem("token");

        if (!id || !accessToken) {
          console.error("사용자 ID 또는 액세스 토큰이 없습니다.");
          return;
        }
        await handleFcmToken(id);
      } catch (error) {
        console.error("FCM 처리 중 오류 발생:", error.message);
      }
    };

    fetchandSendFCM();
  }, []);

  useEffect(() => {
    // 포그라운드 메시지 수신 처리
    onMessage(messaging, (payload) => {
      console.log("포그라운드 메시지 수신:", payload);
    });
  }, []);

  return (
    <Routes>
      <Route path="/selectBook" element={<SelectBookPage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/excerpt-archive-detail/:id" element={<ArchiveDetail />} />
      <Route path="/review-archive-detail/:id" element={<ArchiveDetail />} />
      <Route path="/total-archive-detail/:id" element={<ArchiveDetail />} />
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
      <Route path="/statistics/:userId" element={<StatisticsPage />} />
      <Route
        path="/statistics/export/character"
        element={<CharacterExportPage />}
      />
      <Route
        path="/statistics/export/summary"
        element={<SummaryExportPage />}
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/users/null" element={<Navigate to="/login" replace />} />
      <Route path="/api/oauth" element={<OAuthRedierctPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/user/:id" element={<OtherMainPage />} />
      <Route path="/friend" element={<FriendListPage />} />
      <Route path="/search" element={<SearchMainPage />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/search/register" element={<RegisterPage />} />
      <Route path="/info/book/:bookinfoId" element={<BookInfoPage />} />
      <Route
        path="/info/book/custom/:bookinfoId"
        element={<BookInfoAddedPage />}
      />
      <Route path="/info/book/comment" element={<UserCommentPage />} />
      <Route path="/selectcard" element={<SelectCardPage />} />
      <Route path="/selectcard/extract" element={<SelectExtractPage />} />
      <Route path="/selectcard/review" element={<SelectReviewPage />} />
      <Route path="/selectcard/custom" element={<SelectCustomPage />} />
    </Routes>
  );
}

export default App;
