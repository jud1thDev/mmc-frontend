import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OAuthRedirectPage = () => {
  const navigate = useNavigate();
  const isCalled = useRef(false);

  const readAccessTokenKakao = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("accessToken");
      const expiresIn = urlParams.get("expiresIn");
      const isNewUser = urlParams.get("isNewUser") === "true";

      console.log("전체 URL 검색어:", window.location.search);
      console.log("Access Token:", accessToken);
      console.log("Expires In:", expiresIn);
      console.log("Is New User:", isNewUser);

      if (accessToken) {
        console.log("Access Token 존재");
        const token = {
          accessToken: accessToken,
          expiresIn: new Date().getTime() + expiresIn,
          isNewUser: isNewUser,
        };
        localStorage.setItem("token", JSON.stringify(token));
        if (isNewUser) {
          navigate("/signin", { replace: true });
        } else {
          navigate("/home", { replace: true });
          window.location.reload();
        }
      } else {
        throw new Error("엑세스 토큰 없음");
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (!isCalled.current) {
      readAccessTokenKakao();
      isCalled.current = true;
    }
  }, []);

  return <div>리다이렉트 중입니다...</div>;
};

export default OAuthRedirectPage;
