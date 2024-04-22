import React from "react";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="w-1/3 bg-stone-900 h-screen *:text-stone-300 p-5">
      <h1 className="text-2xl font-bold">My Project Management</h1>
      <Button>+ Add project</Button>
    </div>
  );
}

export default Sidebar;
