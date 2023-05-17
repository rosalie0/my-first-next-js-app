export default async function getSingleUser(userId) {
  console.log("Inside get get single user\n");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
