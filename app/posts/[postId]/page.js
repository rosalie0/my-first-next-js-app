import React from "react";

// we automatically have access to the dynamic variable postId!
const page = ({ params }) => {
  return <div>Post id === {params.postId}</div>;
};

export default page;
