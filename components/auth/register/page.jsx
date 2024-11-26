"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import InputWithIcon from "/components/InputWithIcon";
import Button from '/components/signIn&UpButton.js';
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !phone || !password || !confirmPassword) {
      console.log('form must be filled');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const resUserExists = await fetch('/api/userExists', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exists");
        return;
      }

      const res = await fetch('/api/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, phone, password }),
      });

      if (res.ok) {
        e.target.reset();
        router.push("/login");
        router.refresh();
      } else {
        setError((await res.json()).message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: "/home"})
    
  };

  const handleFacebookSignIn = async () => {
    await signIn('facebook', {callbackUrl: "/home"})
  };

  return (
    <div className="relative p-8 flex flex-col space-y-4 items-center min-h-screen bg-white">
      <div className="relative flex flex-col space-y-4 w-[90%] sm:w-[300px] lg:w-[400px] items-center">
        <img src="/img/logo.png" alt="logo" />
        <h1 className="text-white text-3xl font-bold">WOWSOON</h1>
      </div>

      <form className="flex flex-col min-w-full justify-center items-center pt-5" onSubmit={handleSubmit}>
        <InputWithIcon
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon="user"
        />
        <InputWithIcon
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="email"
        />
        <InputWithIcon
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          icon="phone"
        />
        <InputWithIcon
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon="lock"
        />
        <InputWithIcon
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon="lock"
        />
        <Button type="submit" text="Sign Up" />
      </form>

      <div>
        <p className="flex justify-center items-center"> Or you can sign in with</p>
      </div>

      <div className="sm:px-0 max-w-sm flex flex-row justify-center items-center space-x-4">
        <button onClick={handleGoogleSignIn} className="flex flex-col justify-center items-center">
          <img src="img/google.png" alt="google logo" className="mr-2" />
          <span>Google</span>
        </button>
        <button onClick={handleFacebookSignIn} className="flex flex-col justify-center items-center">
          <img src="img/facebook.png" alt="facebook logo" className="mr-2" />
          <span>Facebook</span>
        </button>
      </div>

      <Link href="/login">
        <span>Already have an account? </span>
        <span className="text-red-700">Login</span>
      </Link>

      {error && <div className="text-red-700 mt-4">{error}</div>}
    </div>
  );
}
