import getSingleUser from "@/lib/getSingleUser";
import getUserPosts from "@/lib/getUserPosts";
import React from "react";

const SingleUser = async ({ params }) => {
  console.log(params.userId);

  // Both of these are promises (they have not been awaited)
  const userData = getSingleUser(params.userId); // don't await
  const userPostsData = getUserPosts(params.userId);

  // This resolves IN PARALLEL, not WATERFALL.
  // We can fire both off at the same time and wait for both to finish (rather than one at a time)
  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const content = (
    <div>
      <h2 className="bold text-xl">Details on {user.username}</h2>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Phone Number: {user.phone}</p>
      <h3>Posts:</h3>
      {userPosts.map((post) => (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
  return content;
};

export default SingleUser;
