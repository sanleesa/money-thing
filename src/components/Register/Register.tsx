import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigation = useNavigate();

  const [register, setRegister] = useState<{
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const handelRegister = () => {
    navigation('/');
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-1/4 bg-slate-300 rounded-xl pl-4 pr-4 pt-3 pb-3">
        <div>
          <h3 className="text-center text-3xl font-semibold">Register</h3>
        </div>
        <div className="">
          <label className="text-black font-semibold">First Name: </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full p-4 rounded-lg bg-white"
            onChange={(event) => {}}
          />
        </div>
        <div className="">
          <label className="text-black font-semibold">Last Name: </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full p-4 rounded-lg bg-white"
            onChange={(event) => {}}
          />
        </div>
        <div className="">
          <label className="text-black font-semibold">Username: </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-4 rounded-lg bg-white"
            onChange={(event) => {}}
          />
        </div>
        <div className="">
          <label className="text-black font-semibold">Password: </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-lg bg-white"
            onChange={(event) => {}}
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-3">
          <div>
            <button
              className="bg-white p-3 w-full rounded-lg"
              onClick={() => handelRegister()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
