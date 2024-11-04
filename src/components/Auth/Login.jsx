import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 rounded-xl border-emerald-600 h-[400px] w-[450px] flex justify-center">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex items-center justify-center flex-col"
        >
          <input
            value={email || ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 rounded-full text-white font-semibold bg-transparent border-emerald-600 w-[300px] outline-none px-5 py-4"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password || ""}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 rounded-full text-white font-semibold bg-transparent mt-3 border-emerald-600 w-[300px] outline-none px-5 py-4"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 w-[100%] py-2 text-[18px] font-semibold rounded-full bg-emerald-600">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
