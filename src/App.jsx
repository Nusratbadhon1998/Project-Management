import { createContext, useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";

export const AppContext = createContext(null);
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  return (
    <AppContext.Provider>
      <main className="flex">
        <Sidebar></Sidebar>
        {/* <NoProjectSelected></NoProjectSelected> */}
        <CreateProject></CreateProject>
      </main>
    </AppContext.Provider>
  );
}

export default App;
