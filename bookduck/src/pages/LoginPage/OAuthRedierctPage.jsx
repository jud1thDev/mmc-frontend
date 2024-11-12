import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OAuthRedirectPage = () => {
  const navigate = useNavigate();
  const isCalled = useRef(false);

  const readAccessTokenKakao = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams);
      const accessToken = urlParams.get("accessToken");
      const expiresIn = urlParams.get("expiresIn");
      const isNewUser = urlParams.get("isNewUser") === "true";
      const userId = urlParams.get("userId");

      if (accessToken) {
        console.log("Access Token 존재");
        const token = {
          accessToken: accessToken,
          expiresIn: new Date().getTime() + expiresIn * 1000,
          isNewUser: isNewUser,
          userId: userId,
        };
        localStorage.setItem("token", JSON.stringify(token));

        if (isNewUser) {
          navigate("/signin", { replace: true });
          window.location.reload();
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
