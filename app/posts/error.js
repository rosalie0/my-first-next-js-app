"use client"; // error components MUST be client components
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // log the error
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>
      <button
        onClick={
          // attempt to recover by trying to rerender the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
