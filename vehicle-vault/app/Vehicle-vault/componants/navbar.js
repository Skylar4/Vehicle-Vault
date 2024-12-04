"use client";

import Link from 'next/link';
import React from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const pathname = usePathname();

  const normalizePath = (path) => path.replace(/\/$/, "");

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  const linkClasses = (path) =>
    `p-5 text-2xl rounded m-4 ${
      normalizePath(pathname) === normalizePath(path)
        ? "bg-teal-400 text-white hover:bg-teal-600"
        : "bg-slate-400 text-white hover:bg-teal-600"
    }`;

  return (
    <div className="items-center flex justify-center h-16 mt-4">
      <div>
        <Link href="/Vehicle-vault/About/" className={linkClasses("/Vehicle-vault/About/")}>
          About
        </Link>
      </div>

      <div>
        <Link href="/Vehicle-vault/vault/" className={linkClasses("/Vehicle-vault/vault/")}>
          Your Vault
        </Link>
      </div>

      <div>
        <Link href="/Vehicle-vault/profile/" className={linkClasses("/Vehicle-vault/profile/")}>
          Profile
        </Link>
      </div>

      <div>
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
      </div>

      <div>
        {user ? (

            <button
            type="button"
            className="bg-slate-400 text-white m-4 h-16 rounded p-4 text-2xl "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-700 text-white m-4 h-16 rounded p-4 text-2xl "
            onClick={handleSignIn}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

