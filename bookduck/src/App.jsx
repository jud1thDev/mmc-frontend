import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TextField from "./components/common/TextField";
import { useState } from "react";
function App() {
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEdit = () => {
    setError(true);
    setIsSubmitted(true);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TextField
            type="내용"
            placeholder="이메일입력"
            title="로그인정보"
            check={false}
            handleEdit={handleEdit}
            error={error}
            isSubmitted={isSubmitted}
            defaultType={true}
          />
        }
      />
    </Routes>
  );
}

export default App;
