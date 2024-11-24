"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  //?? this old authentication function
  // const router = useRouter()
  // const [formData, setFormData ] = useState({
  //   username: '',
  //   password: '',
  // })
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user')
  //   if(storedUser){
  //     setUsers(JSON.parse(storedUser))

  //   }
  // }, [])

  // console.log(users)
  //handle input
  // const handleInput = (e) => {
  //   const  { name, value } = e.target
  //   setFormData({
  //     ...formData, [name]: value
  //   })
  // }

  //handle login
  // const handleSingIn = (e) => {
  //   e.preventDefault()
  //   const user = users.find((user) =>
  //     user.username === formData.username &&
  //     user.password === formData.password
  //   )

  //   if (user){
  //     console.log('login successfully')
  //     router.push('/')
  //   } else {
  //     console.log('invalid username and pasword')
  //   }
  // }

  //!! New authentication function using Next Auth
  // const [username, setUser]
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    console.log(email);
    console.log(password);
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
        return;
      }
      router.replace("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/home" });
    } catch (err) {
      console.log("Google sign-in error:", err);
      setError("Google sign-in failed. Please try again.");
    }
  }

  const handleFacebookSignIn = async () => {
    try {
      await signIn("facebook", { callbackUrl: "/home" });
    } catch (err) {
      console.log("Facebook sign-in error:", err);
  
      setError("Facebook sign-in failed. Please try again.");
    }
  }

  return (
    <div className=" relative p-8 flex flex-col space-y-4 items-center">
      <div className="mt-16 flex flex-col items-center">
        <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
          {/* logo section */}
          <div className="relative">
            <div
              className="w-6 h-8 bg-primary absolute left-0 transform -rotate-45"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }}
            ></div>
            <div
              className="w-4 h-6 bg-primary absolute right-0 transform rotate-45"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 100%)" }}
            ></div>
          </div>
        </div>
        <h1 className="text-white text-3xl font-bold"> WOWSOON </h1>
        {/* logo section */}
      </div>
      <form
        className="flex flex-col min-w-full justify-center items-center pt-5"
        onSubmit={handleSignIn}
      >
        <div className="flex justify-center flex-col mb-2 w-full max-w-xs rounded-full">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center "
        >
          sign in
        </button>
      </form>
      <div className="px-6 sm:px-0 max-w-sm">
        <button
           onClick={handleGoogleSignIn}
          className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google<div>
            
          </div>
        </button>
        <button  onClick={handleFacebookSignIn}className="py-2 px-4 max-w-md  flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
  <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
  </svg>
  Sign in with Facebook
</button>
      </div>

      <div>
        <p>
          {" "}
          do not have account account{" "}
          <Link href="/register" className="bold">
            {" "}
            sing up{" "}
          </Link>{" "}
        </p>
      </div>
      {error && <div>{error.message}</div>}
    </div>
  );
}
