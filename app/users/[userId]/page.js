import getSingleUser from "@/lib/getSingleUser";
import getUserPosts from "@/lib/getUserPosts";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";

const SingleUser = async ({ params }) => {
  console.log(params.userId);

  // Both of these are promises (they have not been awaited)
  const userData = getSingleUser(params.userId); // don't await
  const userPostsData = getUserPosts(params.userId);

  // Method 1 (Follows suggesting #2 from docs)
  // This resolves IN PARALLEL, not WATERFALL.
  // We can fire both off at the same time and wait for both to finish (rather than one at a time).
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  // Method 2  (Follows suggesting #4 from docs)
  // Or, we can incrementally update the page as we get more data.
  const user = await userData; // await the previous Promise we made.

  const content = (
    <div>
      <h2 className="bold text-xl">Details on {user.username}</h2>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Phone Number: {user.phone}</p>
      <h3>Posts:</h3>
      <Suspense fallback={<p>Loading...</p>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </div>
  );
  return content;
};

export default SingleUser;
