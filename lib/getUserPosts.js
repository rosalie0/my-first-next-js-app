export default async function getUserPosts(userId) {
  console.log("Inside getUserPosts\n");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
