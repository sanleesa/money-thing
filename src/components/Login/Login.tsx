import { useState } from "react";
import CryptoJS from "crypto-js";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log(userName, password);
    setPassword("");
    setUserName("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-1/4 bg-slate-300 rounded-xl pl-4 pr-4 pt-3 pb-3">
        <div>
          <h3 className="text-center text-3xl font-semibold">Login</h3>
        </div>
        <div className="">
          <label className="text-black font-semibold">Username: </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-4 rounded-lg bg-white"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="">
          <label className="text-black font-semibold">Password: </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-lg bg-white"
            onChange={(event) =>
              setPassword(CryptoJS.MD5(event.target.value).toString())
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-3">
          <div>
            <button
              className="bg-white p-3 w-full rounded-lg"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div>
            <Link to='/register'>
              <span className="underline cursor-pointer">
                Don't have an account create one here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
