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

  const handleAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  };

  let content;

  if (projectState.selectedProject === null) {
    content = <CreateProject></CreateProject>;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected></NoProjectSelected>;
  }
  const allValue = {
    projectState,
    setProjectState,
    handleAddProject,
  };
  return (
    <AppContext.Provider value={allValue}>
      <main className="flex">
        <Sidebar></Sidebar>
        {content}
      </main>
    </AppContext.Provider>
  );
}

export default App;
