import React from "react";

export default async function getAllUsers() {
  console.log("Inside get all users\n");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
