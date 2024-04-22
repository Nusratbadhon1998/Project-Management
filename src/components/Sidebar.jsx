import React, { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../App";

function Sidebar() {

    const {handleAddProject}=useContext(AppContext)
  return (
    <aside className="w-1/3 bg-stone-900 h-screen *:text-stone-300 p-5">
      <h1 className="text-2xl font-bold">My Project Management</h1>
      <Button onAdd={handleAddProject}>+ Add project</Button>
    </aside>
  );
}

export default Sidebar;
