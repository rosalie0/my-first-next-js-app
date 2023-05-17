import React from "react";

export default async function UserPosts({ promise }) {
  const posts = await promise;
  const content = (
    <div>
      {posts.map((post) => (
        <article key={post.id} className="border p-4">
          <h4 className="text-lg">{post.title}</h4>
          <p className="text-sm">{post.body}</p>
        </article>
      ))}
    </div>
  );
  return content;
}
