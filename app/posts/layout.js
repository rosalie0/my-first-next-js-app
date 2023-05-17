// put a component that you want all routes under posts to have access to,
// such as a 'navigate to top' button.

import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <button className="border bg-blue-500 text-white p-4 rounded-lg">
        This is a button from posts/layout.js
      </button>
    </div>
  );
};

export default layout;
