import { useContext } from "react";
import { UserContext } from "../App";

const Navigation = () => {
  const { userState } = useContext(UserContext);

  const logoutUser = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  return (
    <>
      {userState.isLoggedIn && (
        <a href="logout" onClick={logoutUser}>
          Logout
        </a>
      )}
      {!userState.isLoggedIn && <a href="login">Login</a>}
    </>
  );
};

export default Navigation;
