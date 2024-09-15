import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://img1.ak.crunchyroll.com/i/spire2/cc46fe14a6121ab90402dd69f4e8cced1691419438_main.png)",
      }}
    >
      <div className="bg-black/70 fixed inset-0 z-10" />
      <div className="relative z-20 p-6 bg-black/80 rounded-lg max-w-md w-full mx-auto">
        <h1 className="text-3xl font-nsans-medium text-center text-white mb-6">
          Sign Up
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          <input
            className="p-3 my-2 bg-gray-700 rounded text-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 my-2 bg-gray-700 rounded text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`py-3 my-4 rounded font-nsans-medium text-white ${
              email && password ? "bg-green-600" : "bg-blue-600"
            }`}
            disabled={!email || !password}
          >
            Sign Up
          </button>
          <div className="flex justify-between items-center text-gray-400">
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberLogin}
                onChange={() => setRememberLogin(!rememberLogin)}
              />
              Remember me
            </label>
            <p>Need Help?</p>
          </div>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-white">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
