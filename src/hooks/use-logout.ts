import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logOut = () => {
    Cookies.remove("access_token");
    navigate("/");
  };

  return logOut;
};

export default useLogout;
