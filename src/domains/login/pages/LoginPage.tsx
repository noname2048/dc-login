import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import LockClosed from "@/icons/LockClosed.tsx";
import User from "@/icons/User.tsx";
import { LoginStateAtom } from "@/recoil/LoginStateAtom.ts";

const LoginPage: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom);
  if (loginState.isLogin) {
    return <Navigate to="/page-a" />;
  }

  /** 가짜 로그인을 실행하는 함수 */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (username === "admin" && password === "admin") {
      console.log("login success", loginState);
      setLoginState((prev) => ({ ...prev, isLogin: true, name: "admin" }));
      navigate("/page-a");
    }
  };

  /** 폼 데이터를 콘솔에 출력하는 함수 */
  const handleDebug = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    console.group("login");
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.groupEnd();
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-gray-700"
      style={{
        backgroundImage: "url('/img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex w-[420px] flex-col rounded-[10px] border-[2px] border-white border-opacity-20 bg-transparent px-[40px] py-[30px] text-white backdrop-blur-xl">
        <form ref={formRef}>
          <h1 className="text-center text-[36px] font-extrabold">Login</h1>
          {/* Input box */}
          <div className="relative my-[30px] h-[50px] w-full">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="h-full w-full rounded-[40px] border-2 border-white border-opacity-20 bg-transparent py-[20px] pl-[20px] pr-[45px] text-white outline-none placeholder:text-white"
              autoComplete="username"
            />
            <User className="absolute right-[20px] top-1/2 h-6 w-6 -translate-y-1/2" />
          </div>
          <div className="relative my-[30px] h-[50px] w-full ">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="h-full w-full rounded-[40px] border-2 border-white border-opacity-20 bg-transparent py-[20px] pl-[20px] pr-[45px] text-white outline-none placeholder:text-white"
              autoComplete="current-password"
            />
            <LockClosed className="absolute right-[20px] top-1/2 h-6 w-6 -translate-y-1/2" />
          </div>
          <div className="-mt-[15px] mb-[15px] flex justify-between text-[14.5px]">
            <label>
              <input type="checkbox" className="mr-[3px] accent-white" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="h-[45px] w-full rounded-[40px] border-0 bg-white font-semibold text-[#333] shadow-[0_0_10px_rgba(0,0,0,.1)] outline-none"
            onClick={handleClick}
          >
            Login
          </button>
          <button
            type="submit"
            className="h-[45px] mt-5 w-full rounded-[40px] border-0 bg-white font-semibold text-[#333] shadow-[0_0_10px_rgba(0,0,0,.1)] outline-none"
            onClick={handleDebug}
          >
            Debug
          </button>
          <div className="mt-[20px] text-center text-[14.5px]">
            <p className="text-[#fff]">
              Don't have an account?{" "}
              <a href="#" className="font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
