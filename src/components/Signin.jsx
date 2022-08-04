import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="font-bold text-2xl py-2">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?<Link to="/signup"> Sign up</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-md"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <div>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 my-4 w-full rounded-md">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
