import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonFocused, setIsButtonFocused] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "account") {
      setAccount(value);
    } else if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
    setIsButtonFocused(account !== "" && username !== "" && password !== "");
  };

  const handleSignup = () => {
    if (account && username && password) {
      toast.success("Signup successful!");
    }
  };

  return (
    <div className="card">
      <div className="inputBox">
        <input
          type="text"
          placeholder="Account Locator"
          id="account"
          value={account}
          onChange={handleInputChange}
        />
      </div>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div className="inputBox">
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div className="toi">
        By signing up to TOI and agreeing to the{" "}
        <a href="https://www.samooha.tech/">Privacy Policy</a>.
      </div>
      <div>
        <button
          className={isButtonFocused ? "focused-button" : "nonFocus"}
          onClick={handleSignup}
          disabled={!isButtonFocused}
        >
          Sign Up
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
