"use client";

import { signIn, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-xl">Welcome</h1>
        <span className="font-bold text-2xl">{session.user.name}</span>
      </div>
    );
  }
  return (
    <>
      <h1>Login to get started</h1>
      <button
        onClick={() => {
          signIn("github");
        }}
        className="mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg"
      >
        Sign in with Git Hub
      </button>
    </>
  );
}
