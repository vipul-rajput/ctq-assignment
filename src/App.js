import "./App.css";
import TopBar from "./Components/TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar";
import Edit from "./Pages/Edit";
import { useState } from "react";
import CreateSheet from "./Pages/CreateSheet";
function App() {
  const [editMode, setEditMode] = useState(false)
  return (
    <div>
      <TopBar />
      <SideBar />
      <div  style={{ margin: "93px 0 0 100px", display: editMode?'none':'block' }}>
        <Edit setEditMode={setEditMode}/>
      </div>
      <div style={{margin: "93px 0 0 100px", display:editMode?'block':'none' }}>
        <CreateSheet/>
      </div>
    </div>
  );
}

export default App;
