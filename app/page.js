import Image from "next/image";
import Link from "next/link";

// localhost:3000

// This may look like a regular react component,
// But it's actually a Server-side rendered.
// If you want it to be client-side, the file must start with:
// "use client"
// If you use useState, useEffect, or any other hooks dependant on the client, you must use 'use client' at the top

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1>Home Page</h1>
        <h2>Links:</h2>
        <p>
          <Link href="/users">Users</Link>
          <Link href="/posts">Posts</Link>
        </p>
      </div>
    </main>
  );
}
