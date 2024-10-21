import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenKakao } from "../../api/oauth";

const OAuthRedierctPage = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const readAccessTokenKakao = async () => {
    try {
      const response = await getAccessTokenKakao(code);
      response.data.isnewUser
        ? navigate("/signin", {
            replace: true,
          })
        : navigate("/", { replace: true });
      location.reload(true);
      return;
    } catch (error) {
      console.error(error);
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    readAccessTokenKakao();
  }, []);

  return <div>리다이렉트</div>;
};

export default OAuthRedierctPage;
