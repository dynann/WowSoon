"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import InputWithIcon from "/components/InputWithIcon"; // Import the new InputWithIcon component

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
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
  };

  const handleFacebookSignIn = async () => {
    try {
      await signIn("facebook", { callbackUrl: "/home" });
    } catch (err) {
      console.log("Facebook sign-in error:", err);
      setError("Facebook sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative flex flex-col space-y-4 w-[90%] sm:w-[300px] lg:w-[400px] items-center">
        <div className="mt-16 flex flex-col items-center">
          <img src="/img/logo.png" alt="logo" />
          <h1 className="text-white text-3xl font-bold">WOWSOON</h1>
        </div>

        <form
          className="flex flex-col min-w-full justify-center items-center pt-5"
          onSubmit={handleSignIn}
        >
          <InputWithIcon
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon="user" // Use "user" icon for email
          />

          <InputWithIcon
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon="lock" // Use "lock" icon for password
          />

          <button
            type="submit"
            className="bg-secondary text-white w-[350px] h-[59px] max-w-xs py-4  rounded-[24px] flex items-center justify-center"
          >
            Sign In
          </button>
        </form>

        <div>
          <div>
            {" "}
            Don't have an account?{" "}
            <Link href="/register" className="font-bold text-red-700">
              Sign up
            </Link>{" "}
            <p className="flex justify-center items-center">Or sign in with</p>
          </div>
        </div>

        <div className=" loginWith sm:px-0 max-w-sm flex flex-row justify-center items-center space-x-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex flex-col justify-center items-center"
          >
            <img src="img/google.png" alt="google logo" className="mr-2" />
            <span>Google</span>
          </button>

          <button
            onClick={handleFacebookSignIn}
            className="flex flex-col justify-center items-center"
          >
            <img src="img/facebook.png" alt="facebook logo" className="mr-2" />
            <span>Facebook</span>
          </button>
        </div>

        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
}
