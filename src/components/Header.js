import React from "react";
function Header() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div
            className="navbar-brand text-white font-weight-bold text-lg mx-5"
            style={{ fontSize: "30px" }}
          >
            SquidGame
          </div>
          <form className="d-flex" role="search">
            <a
              href="/"
              className="text-white mx-5"
              style={{ fontSize: "20px", textDecoration: "none" }}
            >
              Registration
            </a>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
