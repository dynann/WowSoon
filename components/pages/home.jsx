"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <h1>this is homepage</h1>
          <button onClick={signOut}>log out</button>
        </div>
      ) : (
        <div>
          you are not signed in go to sign in page{" "}
          <Link href="/register"> sign in</Link>
        </div>
      )}
    </div>
  );
}
