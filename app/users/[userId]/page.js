import getSingleUser from "@/lib/getSingleUser";
import React from "react";

const SingleUser = ({ params }) => {
  console.log(params.userId);
  const user = getSingleUser(params.userId);

  const content = (
    <div>
      <h2 className="bold text-xl">Details on {user.username}</h2>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Phone Number: {user.phone}</p>
    </div>
  );
  return content;
};

export default SingleUser;
