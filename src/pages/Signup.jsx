import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [eye, setEye] = useState(false);
  const [show, setShow] = useState(false);
  function TooglePassword() {
    setEye(!eye);
  }
  function ShowEye() {
    setShow(true)
  }
  return (
    <div class="h-96 w-80 mt-10 p-2 px-5  mx-auto rounded-xl shadow-3xl  dark:shadow-[#2f27ce]  shadow-[#bfbdeb]">
        <div class="text-xl text-center my-2">SignUp</div>
      <div>
        <label htmlFor="uname" class="text-md">
          Username
        </label>
        <input
          type="text"
          placeholder="Email or Username"
          id="uname"
          autoFocus
          class="h-10 w-64 px-2 border-none rounded-xl outline-none mx-4 mt-2 mb-2 border:1 bg-transparent border-black shadow-sm dark:shadow-[#2f27ce] shadow-[#bfbdeb]"
        />
      </div>
      <div>
        <label htmlFor="pass" class="text-md">
          Password
        </label>
        {show ? (
          <div class="relative">
            {eye ? (
              <input
                type="text"
                placeholder="Enter Your Password"
                id="pass"
                autoFocus
                class="h-10 w-64 px-2 border-none rounded-xl outline-none mx-4 mt-2 border:1 bg-transparent border-black shadow-sm dark:shadow-[#2f27ce] shadow-[#bfbdeb]"
              />
            ) : (
              <input
                type="password"
                onChange={ShowEye}
                placeholder="Enter Your Password"
                id="pass"
                autoFocus
                class="h-10 w-64 px-2 border-none rounded-xl outline-none mx-4 mt-2 border:1 bg-transparent border-black shadow-sm dark:shadow-[#2f27ce] shadow-[#bfbdeb]"
              />
            )}

            <button
              class="p-px absolute right-4 top-[20px]"
              onClick={TooglePassword}
            >
              {eye ? <EyeOff /> : <Eye />}
            </button>
          </div>
        ) : (
          <div class="relative">
            {eye ? (
              <input
                type="text"
                placeholder="Enter Your Password"
                id="pass"
                autoFocus
                class="h-10 w-64 px-2 border-none rounded-xl outline-none mx-4 mt-2 border:1 bg-transparent border-black shadow-sm dark:shadow-[#2f27ce] shadow-[#bfbdeb]"
              />
            ) : (
              <input
                type="password"
                onChange={ShowEye}
                placeholder="Enter Your Password"
                id="pass"
                autoFocus
                class="h-10 w-64 px-2 border-none rounded-xl outline-none mx-4 mt-2 border:1 bg-transparent border-black shadow-sm dark:shadow-[#2f27ce] shadow-[#bfbdeb]"
              />
            )}
          </div>
        )}
      </div>
      <div class="w-full flex items-center">
        <button class="mx-auto mt-2  h-10 w-[50%] bg-[#2f27ce] hover:bg-[#433bff] rounded-full text-md text-white">Sign Up</button>
        </div>
      <div class="h-px  w-full bg-[#858282] mt-5 relative flex justify-center">
        <span class="absolute -top-3  bg-slate-50 px-5 dark:bg-black">OR</span>
      </div>
        
        <div class='h-8 w-[90%] mx-auto mt-5 pl-5 rounded-xl border-[1px] border-black dark:border-white flex items-center gap-4 hover:cursor-pointer hover:border-[2px]'>
            <div class='h-5 w-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            </div>
            <span >Continue With Google</span>
        </div>
      

    </div>
  );
}
