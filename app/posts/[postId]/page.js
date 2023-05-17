import React from "react";

// we automatically have access to the dynamic variable postId!
const page = ({ params }) => {
  return (
    <div>
      This is where the info for post of the below id would go :D
      <p>Post id === {params.postId}</p>
    </div>
  );
};

export default page;
