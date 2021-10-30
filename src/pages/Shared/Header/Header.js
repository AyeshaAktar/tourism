import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Camping Village
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-link active text-white" to="/home">
              Home
            </Link>
            <Link className="nav-link text-white" to="/home#camping">
              Camping
            </Link>
            <Link className="nav-link text-white" to="/MyBooking">
              My Booking
            </Link>
            <Link className="nav-link text-white" to="/manageBooking">
              Manage Booking
            </Link>
            {loginUser?.email ? (
              <Link
                onClick={handleLogout}
                className="nav-link text-white"
                to="#"
              >
                {" "}
                {loginUser?.displayName} LogOut
              </Link>
            ) : (
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
