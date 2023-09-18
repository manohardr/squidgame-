import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeData } from "../redux/Action/action";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (name && email && mobile && difficulty) {
      const dataToDispatch = {
        name,
        email,
        mobile,
        difficulty,
      };

      dispatch(storeData(dataToDispatch));
      navigate("/Green-Light-Red-Light");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div
        className="container mt-5 shadow-lg rounded-4"
        style={{
          backgroundColor: "black",
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-center mt-3 text-info">User Registration</h3>
            <form>
              <div className="mb-3">
                <label for="name" className="form-label text-white">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="mobile" className="form-label text-white">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="difficulty" className="form-label text-white">
                  Difficulty Level
                </label>
                <select
                  className="form-select"
                  id="difficulty"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-dark text-info text-center mb-3 shadow-lg"
                style={{ marginLeft: "65px" }}
                onClick={handleStartGame}
              >
                Start Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
