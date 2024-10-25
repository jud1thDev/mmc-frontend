import { Routes, Route } from "react-router-dom";
import NotificationPage from "./pages/Notification/NotificationPage";
import FriendListPage from "./pages/Friend/FriendListPage";
import FriendRequestPage from "./pages/Friend/FriendRequestPage";
import SearchMainPage from "./pages/Search/SearchMainPage";
import SearchBookPage from "./pages/Search/SearchBookPage";
import SearchArchivePage from "./pages/Search/SearchArchivePage";
import SearchUserPage from "./pages/Search/SearchUserPage";
import RegisterPage from "./pages/Search/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/friend/list" element={<FriendListPage />} />
      <Route path="/friend/request" element={<FriendRequestPage />} />
      <Route path="/search" element={<SearchMainPage />} />
      <Route path="/search/book" element={<SearchBookPage />} />
      <Route path="/search/archive" element={<SearchArchivePage />} />
      <Route path="/search/user" element={<SearchUserPage />} />
      <Route path="/search/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
