import React, { useEffect, useState } from "react";
import LoginPage from "../components/login/Login";
import Dialog from "../components/resusable/Dialog";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen((state) => {
      return !state;
    });
  }, []);

  return (
    <div>
      {isOpen ? (
        <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div className="flex items-center justify-center h-[400px] text-center">
          <span className="text-gray-500 ">
            {" "}
            You have not logged in , Please{" "}
            <button
              onClick={() => {
                setIsOpen((state) => {
                  return !state;
                });
              }}
              className="text-blue-400 rounded-md ring-indigo-50"
            >
              {" "}
              Login
            </button>{" "}
          </span>
        </div>
      )}
    </div>
  );
}

export default Login;
