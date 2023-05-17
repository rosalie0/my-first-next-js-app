import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "Users",
};
// localhost:3000/user
const UsersPage = async () => {
  const usersData = await getAllUsers();
  const content = (
    <section>
      <h2 className="italic text-sm">
        <Link href="/">{"<-"} Back to Home</Link>
      </h2>
      <h2 className="bold text-xl py-6">All Users:</h2>
      {usersData.map((user) => (
        <div key={user.id} className="hover:text-blue-500 py-2">
          <Link href={`/users/${user.id}`}>{user.username}</Link>
        </div>
      ))}
    </section>
  );

  return content;
};

export default UsersPage;
