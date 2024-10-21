import { Routes, Route } from "react-router-dom";
import NotificationPage from "./pages/Notification/NotificationPage";
import FriendListPage from "./pages/Friend/FriendListPage";
import FriendRequestPage from "./pages/Friend/FriendRequestPage";
function App() {
  return (
    <Routes>
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/friend/list" element={<FriendListPage />} />
      <Route path="/friend/request" element={<FriendRequestPage />} />
    </Routes>
  );
}

export default App;
