export default async function getSingleUser(userId) {
  console.log("Inside getSingleUser.");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw new Error(`failed to fetch single user data`);
  return res.json();
}
